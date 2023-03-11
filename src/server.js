/* eslint-disable no-console */
const express = require('express');

class Server {
  constructor(option, manifest) {
    this.config = Object.assign(option);
    this.manifest = Object.assign(manifest);
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    Object.values(this.config.routes).forEach((moduleRouteDef) => {
      const router = express.Router();
      moduleRouteDef.routes.forEach((route) => {
        router[route.method](
          ...[route.path].concat(route.action),
        );
      });
      this.app.use(moduleRouteDef.basePath, router);
    });
  }

  start() {
    const { port } = this.config;
    const {
      name,
      author,
      description,
      host,
    } = this.manifest.config.app;
    this.http = this.app.listen(port, () => console.dir({
      message: `APP RUNNING ON PORT ${3000}`,
      data: {
        name,
        author,
        description,
        link: `${host}:${port}`,
      },
    }));
  }
}

module.exports = Server;
