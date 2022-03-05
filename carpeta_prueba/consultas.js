const { Pool } = require('pg');

const configuration = {
  user: 'postgres',
  password: 'inacap.2019',
  host: 'localhost',
  port: 5432,
  database: 'bike_shop',
};

const pool = new Pool(configuration);

const getCategories = async () => {
  const query = {
    text: `SELECT * 
    FROM categories
    ORDER BY category_name;`,
  };

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    return error;
  }
};

const createCategory = async (payload) => {
  const query = {
    text: `INSERT INTO categories
    (category_id, category_name)
    VALUES
    ($1, $2) RETURNING *;`,
    values: payload,
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    return error;
  }
};

const updateCategory = async (id, payload) => {
  console.log(id);
  console.log(payload);
  const query = {
    text: `UPDATE categories SET
    category_name = $1
    WHERE category_id = ${id} RETURNING *;`,
    values: payload,
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    return error;
  }
};

const deleteCategory = async (id) => {
  const query = {
    text: `DELETE FROM categories
    WHERE category_id = ${id};`
  };

  try {
    const result = await pool.query(query);
    return result.rowCount;
  } catch (error) {
    return error;
  }
}

const findCategoryById = async(id) => {
  const query = {
    text: `SELECT * FROM categories
    WHERE category_id = ${id};`
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    return error;
  }
}

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryById,
};
