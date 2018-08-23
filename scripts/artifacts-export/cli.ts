#!/usr/bin/env node

import chalk from 'chalk';
import * as _ from 'lodash';
import * as Handlebars from 'handlebars'
import * as yargs from 'yargs';
import { pascalize } from 'humps'
import { sync as globSync } from 'glob'

import { readdirSync, readFileSync, writeFileSync } from "fs";
import * as path from 'path'

const DEFAULT_CONTRACT_POSTFIX = 'Instance'
const ALLOWED_EXTENSIONS = ['.ts']
const ARTIFACTS_EXPORT_TEMPLATE_FILE = 'artifacts-export-template.handlebars'
const CONTRACTS_EXPORT_TEMPLATE_FILE = 'contracts-export-template.handlebars'

interface TemplateContext {
    contracts: Contract[];
    generatedDir: string;
}

interface Contract {
    filename: string;
    contractArtifactName: string;
    contractInstanceName: string;
    contractLibRelativePath: string;
}

const args = yargs
    .option('inputFolder', {
        alias: ['i'],
        describe: 'Folder with generated contracts',
        type: 'string',
        normalize: true,
        demandOption: true,
    })
    .option('output', {
        alias: ['o', 'out'],
        describe: 'Output folder for artifacts module',
        type: 'string',
        normalize: true,
        demandOption: true,
    })
    .option('postfix', {
        alias: ['p'],
        describe: 'Pass postfix format for contracts to be exported from contracts definitions',
        type: 'string',
    })
    .option('exclude', {
        alias: ['e'],
        describe: 'Skips provided files/templates in folder with generated contracts',
        type: 'array',
    })
    .option('templates', {
        alias: ['t'],
        describe: 'Provides templates\' folder',
        type: 'string',
        normalize: true,
        demandOption: true,
    })
    .option('artifacts', {
        alias: ['a'],
        describe: 'Folder with artifacts to check correctness of contracts\' names',
        type: 'string',
        normalize: true,
        demandOption: true,
    })
    .options('contractNames', {
        alias: ['cn'],
        describe: 'List of contract names to verify correctnes of contracts',
        type: 'array'
    })
    .conflicts('artifacts', 'contractNames')
    .example(
        "$0 --inputFolder='src/generated/contracts/' --output=src/generated/ --postfix Instance --exclude='index*' 'artifacts.js' --templates=./scripts/ --artifacts=./build/contracts/ ",
        'Full using example, where folder with artifacts provided'
    )
    .example(
        "$0 --inputFolder='src/generated/contracts/' --output=src/generated/ --postfix Instance --exclude='index*' 'artifacts.js' --templates=./scripts/ --contractNames=FakeCoin Migrations ",
        'Full using example, where names of contracts provided'
    )
    .argv;


const files: string[] = readdirSync(args.inputFolder, "utf8")

if (_.isEmpty(files)) {
    console.log(`${chalk.red(`No contracts found in ${args.inputFolder} folder`)}`)
    console.log(`Please make sure that you've generated any contracts first.`)
    process.exit(1)
}

console.log(`${chalk.magenta(`Hey, found some contracts:`)}`)

const excludePatters = (args.exclude as string[]) || []
const excludedFiles = _.map(excludePatters, (pattern) => {
    console.log(`Perform search pattern to exclude: ${pattern}`)
    return globSync(pattern, { cwd: args.inputFolder })
})
const excludedFilesFlatten = _.flatten(excludedFiles)
console.log(`Files excluded: ${excludedFilesFlatten.length > 0 ? chalk.redBright(`${excludedFilesFlatten}`) : `no files found`}.`)

const contractPostfix = pascalize(args.postfix || DEFAULT_CONTRACT_POSTFIX)
const contracts: Contract[] = _.filter(files, file => {
    return _.includes(ALLOWED_EXTENSIONS, path.extname(file)) && 
        !_.includes(excludedFilesFlatten, file)
})
.map((file, index) => {
    let filename = path.basename(file, path.extname(file))
    let contractArtifactName = pascalize(`${filename}`)
    let contractInstanceName = pascalize(`${filename}${contractPostfix}`)
    console.log(`${index + 1}: ${chalk.underline(`${file}`)} => ${chalk.greenBright(`${contractInstanceName}`)}`)

    return <Contract>{
        filename: filename,
        contractArtifactName: contractArtifactName,
        contractInstanceName: contractInstanceName,
        contractLibRelativePath: `./${filename}`,
    };
})

console.log(`${chalk.greenBright(`Found contracts:`)}`)
_.forEach(contracts, (contract) => {
    console.log(`${JSON.stringify(contract, null, 4)}`)
})

const templateContext = <TemplateContext>{
    contracts: contracts,
    generatedDir: `./${path.relative(args.output, args.inputFolder)}`
}


/// ------------ load templates ------------

const artifactsTemplatePath = path.resolve(path.join(args.templates, ARTIFACTS_EXPORT_TEMPLATE_FILE))
const artifactsTemplateContent = getNamedContent(artifactsTemplatePath)
const artifactsTemplate = Handlebars.compile<TemplateContext>(artifactsTemplateContent.content)
const renderedArtifactsTemplate = artifactsTemplate(templateContext)
writeFileSync(path.join(args.output, 'artifacts.d.ts'), renderedArtifactsTemplate)

const contractsTemplatePath = path.resolve(path.join(args.templates, CONTRACTS_EXPORT_TEMPLATE_FILE))
const contractsTemplateContent = getNamedContent(contractsTemplatePath)
const contractsTemplate = Handlebars.compile<TemplateContext>(contractsTemplateContent.content)
const renderedContractsTemplate = contractsTemplate(templateContext)
writeFileSync(path.join(args.inputFolder, 'index.ts'), renderedContractsTemplate)

/// ----------------------------------------

function getNamedContent(filename: string): { name: string; content: string } {
    const name = path.basename(filename);
    try {
        const content = readFileSync(filename).toString();
        return {
            name,
            content,
        };
    } catch (err) {
        throw new Error(`Failed to read ${filename}: ${err}`);
    }
}

