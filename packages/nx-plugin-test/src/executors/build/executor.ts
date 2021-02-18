import { BuildExecutorSchema } from './schema';
import * as chalk from 'chalk';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log(
    `${chalk.inverse(
      chalk.magenta(
        'Executor ran for Build! A little change, another one, options'
      )
    )}`
  );
  return {
    success: true,
  };
}
