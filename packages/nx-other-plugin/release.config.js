/* eslint-disable no-undef */
// npx semantic-release --no-ci --branch=semantic-release-plus --extends=./packages/nx-plugin-test/release.config.js --debug
const name = 'nx-other-plugin';
const srcRoot = `packages/${name}`;

module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],
  pkgRoot: `dist/${srcRoot}`, // should come from angular.cli
  tagFormat: name + '-v${version}',
  commitPaths: [
    'workspace.json',
    'nx.json',
    '.nxignore',
    'package.json',
    '.prettierrc',
    '.prettierignore',
    `${srcRoot}/*`,
  ], // should come from dep-graph and angular.json
  assets: [`${srcRoot}/README.md`, `${srcRoot}/CHANGELOG.md`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message:
          `chore(release): ${name}` +
          '-v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
