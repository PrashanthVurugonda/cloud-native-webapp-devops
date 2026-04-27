const { query } = require("../db");

async function createTask(payload) {
  const sql = `
    INSERT INTO tasks (title, description, status)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [payload.title, payload.description || null, payload.status || "pending"];
  const result = await query(sql, values);
  return result.rows[0];
}

async function getTasks() {
  const result = await query("SELECT * FROM tasks ORDER BY id DESC");
  return result.rows;
}

async function getTaskById(id) {
  const result = await query("SELECT * FROM tasks WHERE id = $1", [id]);
  return result.rows[0] || null;
}

async function updateTask(id, payload) {
  const sql = `
    UPDATE tasks
    SET title = $1,
        description = $2,
        status = $3,
        updated_at = NOW()
    WHERE id = $4
    RETURNING *
  `;
  const values = [payload.title, payload.description || null, payload.status || "pending", id];
  const result = await query(sql, values);
  return result.rows[0] || null;
}

async function deleteTask(id) {
  const result = await query("DELETE FROM tasks WHERE id = $1 RETURNING id", [id]);
  return Boolean(result.rowCount);
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
