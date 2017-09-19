// ..
'use strict';

// ..
var nodemon = require('nodemon');
nodemon('--exec babel-node ./app --presets=es2015 --watch ./app');
nodemon.on('start', function () {
  console.log('[nodemon] App has started');
}).on('quit', function () {
  console.log('[nodemon] App has quit');
}).on('restart', function (files) {
  console.log('[nodemon] App restarted due to:', files);
});