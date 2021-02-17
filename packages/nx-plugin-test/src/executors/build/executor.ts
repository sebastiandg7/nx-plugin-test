import { logger } from '@nrwl/devkit';
import { BuildExecutorSchema } from './schema';
import * as chalk from 'chalk';

const PLUGIN_PREFIX = `${chalk.bold(chalk.yellow(`> ${chalk.inverse(' PLUGIN-TEST ')}`))}`;

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Executor ran for Build', options);
  logger.info(`${PLUGIN_PREFIX} ${chalk.bold('Holi :)!')}`);
  return {
    success: true,
  };
}
