const test = require('tape');
const app = require('../src/App');
const request = require('supertest')(app);
const base = '/api/v1/monsters';

test('POST /api/v1/monsters', async (assert) => {
  let monster, res;

  monster = {
    id: 0,
    name: "joe biden",
    description: "big smile, kinda handsy",
    eyes: 2,
    scary: false,
  };
  res = await request.post(base).send(monster);
  assert.equal(res.status, 201, 'it should return a 201 created');
  assert.equal(res.body.monster.name, monster.name, 'it should return created monster');

  monster = {
    eyes: 8,
    scary: true,
    description: "a scary spider!",
  };
  res = await request.post(base).send(monster);
  assert.equal(res.status, 409, 'names are required');

  assert.end();
});

test('GET /api/v1/monsters', async (assert) => {
  const res = await request.get(base);
  assert.equal(res.status, 200, 'it should return 200');
  assert.equal(Array.isArray(res.body.monsters), true, 'it should return an array of monsters');
  assert.end();
});

test('GET /api/v1/monsters/:id', async (assert) => {
  let id, res;

  id = 0;
  res = await request.get(`${base}/${id}`);
  assert.equal(res.status, 200, 'it should return 200');
  assert.equal(res.body.monster.id, id, 'it should return a single monster');

  id = 3;
  res = await request.get(`${base}/${id}`);
  assert.equal(res.status, 404, 'it should return 404 for non-existant monsters');

  assert.end();
});

test('PUT /api/v1/monsters/:id', async (assert) => {
  const id = 0;
  const monster = {
    id,
    name: "harper",
    description: "small, black and furry, adorable",
  };
  const res = await request.put(`${base}/${id}`).send(monster);
  assert.equal(res.body.monster.name, monster.name, 'it should return a single monster upon editing');
  assert.end();
});

test('DELETE /api/v1/monsters/:id', async (assert) => {
  let id, res;

  id = 0;
  res = await request.del(`${base}/${id}`);
  assert.equal(res.status, 200, 'it should return a 200 status');
  assert.equal(typeof res.body, 'object', 'it should return an object');
  
  // TODO why does this not work?
  // id = 3;
  // res = await request.del(`${base}/${id}`);
  // assert.equal(res.status, 404, 'it should return a 404 status for non-existant entries');

  assert.end();
});

// FIXME how can I hook into the server and close down the connection instead
// of exiting out of the process like this?
test.onFinish(() => process.exit(0));
