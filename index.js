"use strict";

const mysql = require("serverless-mysql")({
  config: {
    host: '35.198.245.174',
    database: 'mydb',
    user: 'root',
    password: 'Admin@123',
  },
});

exports.http = async (request, response) => {
  let results = await mysql.query('SELECT * FROM User')
  console.log('results', results)
  // Run clean up function
  await mysql.end()

  response.status(200).send(results);
};

exports.event = (event, callback) => {
  callback();
};
