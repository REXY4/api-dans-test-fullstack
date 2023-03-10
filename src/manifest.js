const express = require('express');
const config = require('../config/index');
const Server = require('./server');
const routes = require('./routes');

class Manifest {
  constructor() {
    this.config = config;
    this.routes = Object.values(routes).filter(fil => fil.routes.map((route) => route.active === true));
    this.app = express();
  }

  async setup() {
    this.setServer();
  }

  start() {
    this.setup();
  }

  setServer() {
    this.server = new Server({
      port: this.config.app.port,
      routes: this.routes,
    }, this);
    this.server.start();
  }
}

module.exports = Manifest;
