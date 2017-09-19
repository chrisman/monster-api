const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const MonsterRouter = require('./routes/MonsterRouter');

class App {

  constructor() {
    this.app = express();
    this._middleware();
    this._routes();
  }

  _middleware() {
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  }

  _routes() {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'RESTful API /api/v1/monsters'
      })
    })
    this.app.use('/', router);
    this.app.use('/api/v1/monsters', MonsterRouter);
  }
}

exports.default = new App().app;
