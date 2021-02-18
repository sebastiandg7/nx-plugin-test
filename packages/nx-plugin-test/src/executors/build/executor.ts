import { BuildExecutorSchema } from './schema';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Executor ran for Build! A little change, another one', options);
  return {
    success: true,
  };
}
