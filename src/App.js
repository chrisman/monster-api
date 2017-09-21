const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');

const MonsterRouter = require('./routes/MonsterRouter');

const createApp = {
  init() {
    this.app = express();
    this.middleware();
    this.routes();

    return this.app;
  },
  middleware() {
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  },
  routes() {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'RESTful API /api/v1/monsters'
      })
    })
    this.app.use('/', router);
    this.app.use('/api/v1/monsters', MonsterRouter);
  }
};

module.exports = createApp.init();
