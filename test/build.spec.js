const fs = require('fs-extra');
const mockFs = require('mock-fs');
const should = require('chai').should;

const build = require('./../build');

describe('Build script', () => {
  before(function() {
    mockFs({
      'GEMFILE': '',
      'features/support/env.rb': ''
    });
  });

  after(function() {
    mockFs.restore();
  });

  it('should successfully add gems to the GEMFILE', function() {
    build.addToGemfile('testGem');
    const gemfile = fs.readFileSync('GEMFILE', 'utf-8');

    should().equal(gemfile.includes('# Customized gems'), true, 'Customized gem comment was missing');
    should().equal(gemfile.includes("gem 'testGem'"), true, 'testGem was missing from gemfile');
  });

  it('should successfully add requires to the env file', function() {
    build.addRequireToEnv('testGem/testMethod');
    const env = fs.readFileSync('features/support/env.rb', 'utf-8');

    should().equal(env.includes('# Customized code'), true, 'Customized code comment was missing');
    should().equal(env.includes("require 'testGem/testMethod'"), true, 'require was missing from gemfile');
  });
});
