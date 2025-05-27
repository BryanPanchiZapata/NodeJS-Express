import { pool } from "../db.js";

export const getPing = async(req, res)=>{
  return res.json({message:"Api is working"});
}

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM usersnew");
  return res.json(rows);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM usersnew WHERE id = $1", [
    id,
  ]);
  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(rows[0]);
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const { rows } = await pool.query(
      "INSERT INTO usersnew (name, email) VALUES ($1, $2) RETURNING *",
      [data.name, data.email]
    );
    return res.json(rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { rows, rowCount } = await pool.query(
    "DELETE FROM usersnew WHERE id = $1 RETURNING *",
    [id]
  );
  console.log(rows);
  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json({ message: "User deleted successfully" });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE usersnew SET name = $1, email = $2 WHERE id = $3 ReTURNING *",
    [data.name, data.email, id]
  );

  return res.json(rows[0]);
};
