const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch packages/* source so Metro picks up live edits
config.watchFolders = [monorepoRoot];

// Resolve modules only from apps/mobile/node_modules — file: symlinks
// already land there, so we don't need the root on the path.
// Adding the root caused @babel/runtime version conflicts.
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

module.exports = config;
