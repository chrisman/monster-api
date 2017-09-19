# Restful Monsters API

a rewrite of [berto's example](https://github.com/berto/monsters-restful-api) in JavaScript

## Motivation

1. use es6 classes to describe everything: models, routes, the app itself, etc.

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

run the tests: `npm run test`
