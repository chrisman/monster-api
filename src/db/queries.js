const knex = require('./connection');

const queries = {
  getAll: () => knex('monster').select(),
  getOne: async (id = 0) => {
    [ monster ] = await knex('monster').select().where('id', id);
    return monster;
  },
  add: async (monster = {}) => {
    [ result ] = await knex('monster').insert(monster).returning('*');
    return result;
  },
  edit: async (id = 0, monster = {}) => {
    [ result ] = await knex('monster').update(monster).where('id', id).returning('*');
    return result;
  },
  remove: (id  = 0) => knex('monster').del().where('id', id)
};

module.exports = queries;
