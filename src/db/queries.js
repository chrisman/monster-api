const knex = require('./connection');

const getAll = () => {
  return knex('monster').select();
}

const getOne = async (id = 0) => {
  const monster = await knex('monster').select().where('id', id);
  return monster[0];
}

const add = async (monster = {}) => {
  const result = await knex('monster').insert(monster).returning('*');
  return result[0];
}

const edit = async (id = 0, monster = {}) => {
  const result = await knex('monster').update(monster).where('id', id).returning('*');
  return result[0];
}

const remove = (id = 0) => {
  return knex('monster').del().where('id', id);
}

module.exports = {
  add,
  edit,
  getAll,
  getOne,
  remove,
}
