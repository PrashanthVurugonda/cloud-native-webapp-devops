const { Pool } = require("pg");
const { loadEnv } = require("../config/env");

const env = loadEnv();

const pool = new Pool({
  connectionString: env.databaseUrl,
});

async function query(text, params = []) {
  return pool.query(text, params);
}

async function testConnection() {
  await pool.query("SELECT 1");
}

module.exports = {
  pool,
  query,
  testConnection,
};
