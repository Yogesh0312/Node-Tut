// import chalk from 'chalk';
// import validator from 'validator';

const chalk = require('chalk');
const validator = require('validator');

const res = validator.isEmail("Hello@gmail.com")
console.log(res ? chalk.green(res) : chalk.red(res))

console.log(chalk.blue.italic('Hello world!'));