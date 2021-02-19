import { BuildExecutorSchema } from './schema';
import * as chalk from 'chalk';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log(
    `${chalk.inverse(
      chalk.greenBright(
        'Executor ran for Build! A little change, another one, options'
      )
    )}
    ${chalk.gray(`This should be gray`)}\n\n
    ${chalk.red(`This should be red`)}
      `
  );
  return {
    success: true,
  };
}
