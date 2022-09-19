'use strict';
const MySql = require('mysql2');

const { resolveConfig } = require("prettier");

GetTab = async function(name) {
  var pool = await MySql.createPool({});
  var conn = await pool.getConnection();
  const query = 'select * from users where name = ?';
  var params = [ name ];
  
  const dbResult = await conn.query(query, params);
  
  conn.release();

  return dbResult;
}

module.exports = TabCount;
