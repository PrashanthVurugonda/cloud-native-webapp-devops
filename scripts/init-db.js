const fs = require("fs");
const path = require("path");
const { query } = require("../src/db");

async function initDb() {
  const sqlPath = path.join(__dirname, "..", "src", "db", "init.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");
  await query(sql);
  console.log("Database initialized successfully");
}

initDb().catch((error) => {
  console.error("Database initialization failed", error);
  process.exit(1);
});
