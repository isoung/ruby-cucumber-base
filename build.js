const fs = require('fs-extra');
const yargs = require('yargs');

const args = yargs.argv;

exports.addToGemfile = function(gem) {
  let gemfile = fs.readFileSync('GEMFILE', 'utf-8');
  gemfile += gemfile.includes('# Customized gems') ? `\ngem '${gem}'` : `\n# Customized gems\ngem '${gem}'`;
  fs.writeFileSync('GEMFILE', gemfile, { flag: 'w' });
}

exports.addRequireToEnv = function(req) {
  let env = fs.readFileSync('features/support/env.rb', 'utf-8');
  env += env.includes('# Customized code') ? `\nrequire '${req}'` : `\n# Customized code\nrequire '${req}'`;
  fs.writeFileSync('features/support/env.rb', env, { flag: 'w' });
}

// Build steps. Either build or remove unwanted options.
if (args.capybara) {
  this.addToGemfile('capybara');
  this.addRequireToEnv('capybara/cucumber');
}

// Clean up all files that are not needed by the framework.
if (args.clean) {
  fs.unlinkSync('build.js');
  fs.unlinkSync('options.json');
  fs.unlinkSync('package.json');

  fs.removeSync('node_modules');
  fs.removeSync('templates');
  fs.removeSync('test');
  fs.removeSync('.gitignore');
}

