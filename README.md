# Restful Monsters API

a rewrite of [berto's example](https://github.com/berto/monsters-restful-api) in JavaScript

## Notes

I liked the use of classes to organize the app and the routes, and was motivated to write a version of it from scratch in JS (as opposed to TypeScript) to see how it felt.

## Getting started

1. set up your database

  ```
  brew install postgres
  brew services start postgres
  psql -c 'create database monsters;' -d postgres
  ```

1. `npm install`

1. Run it: `npm start`

## There are tests

run the tests: `npm run test`.

Notes on using `supertest` for http calls in the tests:

1. Separating the app from the server allowed for easy testing with `supertest`.

2. Did not find a clean way to close whatever node handle `supertest` creates when connecting to the app. Instead am using a dirty `test.onFinish(() => process.exit(0));` to exit the tests 😒 See [#216](https://github.com/substack/tape/issues/216)
