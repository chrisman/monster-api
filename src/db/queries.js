const knex = require('./connection');

class Queries {

  getAll() {
    return knex('monster').select();
  }

  async getOne(id) {
    const [ monster ] = await knex('monster').select().where('id', id);
    return monster;
  }

  async add(monster) {
    const [ result ] = await knex('monster').insert(monster).returning('*');
    return result;
  }

  async edit(id, monster) {
    const [ result ] = await knex('monster').update(monster).where('id', id).returning('*');
    return result;
  }

  remove(id) {
    return knex('monster').del().where('id', id);
  }
}

module.exports = new Queries();
