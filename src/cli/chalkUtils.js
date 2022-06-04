import Chalk from "chalk";

export const printBgGreenUl = (input) =>
  console.log(`${Chalk.bgGreen.underline(input)}`);
export const printInverseBold = (input) =>
  console.log(`${Chalk.inverse.bold(input)}`);
export const printBgRed = (input) =>
  console.log(`${Chalk.red.strikethrough(input)}`);
