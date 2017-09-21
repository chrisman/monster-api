const express = require('express');
const monsterQueries = require('../db/queries');

const MonsterRouter = {
  init(req, res, next) {
    this.router = express.Router();
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
    this.router.post('/', this.add);
    this.router.put('/:id', this.edit);
    this.router.delete('/:id', this.remove);
    return this.router;
  },
  async getAll(req, res, next) {
    const monsters = await monsterQueries.getAll();
    res.json({ message: 'Success', monsters });
  },
  async getOne(req, res, next) {
    const id = parseInt(req.params.id);
    const monster = await monsterQueries.getOne(id) ;
    if (monster) {
      res.json({ message: 'Success', monster });
    } else {
      res.status(404).json({ message: 'No monster found with the given id.' });
    }
  },
  async add(req, res, next) {
    if (req.body.name && typeof req.body.name === 'string') {
      const monster = await monsterQueries.add(req.body);
      res.status(201).json({ message: 'Success', monster });
    } else {
      res.status(409).json({ message: 'Name is required to add a monster' });
    }
  },
  async edit(req, res, next) {
    const id = parseInt(req.params.id);
    const monster = await monsterQueries.edit(id, req.body);
    res.json({ message: 'Success', monster });
  },
  async remove(req, res, next) {
    const id = parseInt(req.params.id);
    try {
      await monsterQueries.remove(id);
      res.json({ message: 'Success'});
    } catch(error) {
      res.status(404).json({ message: 'No monster found with the given id.', error });
    }
  },
}

module.exports = MonsterRouter.init();
