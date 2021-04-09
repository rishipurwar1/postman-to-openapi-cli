#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk');
const postmanToOpenApi = require('postman-to-openapi')
const program = require('commander');

const ver = require('./package.json')

const error = chalk.bold.red;
const success = chalk.keyword('green');

program
    .version(ver.version, '-v, --version')
    .option('-s, --source <source>', 'Relative path of the Input Postman Collection v2.0/v2.1')
    .option('-o, --outp==ut <output>', 'Relative path of the Output OpenAPI 3.0')
    .parse(process.argv);

const inputFilename = process.argv[3];
const outputFilename = process.argv[5];

const inputAbsPath = path.resolve(process.cwd(), inputFilename);
const outputAbsPath = path.resolve(process.cwd(), outputFilename);

// Postman Collection Path
const postmanCollection = inputAbsPath;
// Output OpenAPI Path
const outputFile = outputAbsPath;

const convertCollectionToOpenAPI = async () => {
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
        console.log(success(`=================================\nSuccessfully Converted To OpenAPI\n=================================`));
    } catch (err) {
        console.log(error(err))
    }
}

convertCollectionToOpenAPI();