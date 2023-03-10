const Manifest = require('./src/manifest');

function start() {
  const manifest = new Manifest();
  return manifest.start();
}

start();
