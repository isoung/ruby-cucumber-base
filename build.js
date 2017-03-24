const fs = require('fs');

// Build steps. Either build or remove unwanted options.

// Clean up all files that are not needed by the framework.
fs.unlinkSync('build.js');
fs.unlinkSync('options.json');
