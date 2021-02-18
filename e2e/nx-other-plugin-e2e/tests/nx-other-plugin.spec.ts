import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nx-other-plugin e2e', () => {
  it('should create nx-other-plugin', async (done) => {
    const plugin = uniq('nx-other-plugin');
    ensureNxProject(
      '@sebastiandg7/nx-other-plugin',
      'dist/packages/nx-other-plugin'
    );
    await runNxCommandAsync(
      `generate @sebastiandg7/nx-other-plugin:nx-other-plugin ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('nx-other-plugin');
      ensureNxProject(
        '@sebastiandg7/nx-other-plugin',
        'dist/packages/nx-other-plugin'
      );
      await runNxCommandAsync(
        `generate @sebastiandg7/nx-other-plugin:nx-other-plugin ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('nx-other-plugin');
      ensureNxProject(
        '@sebastiandg7/nx-other-plugin',
        'dist/packages/nx-other-plugin'
      );
      await runNxCommandAsync(
        `generate @sebastiandg7/nx-other-plugin:nx-other-plugin ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
