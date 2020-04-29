const db = require('../db');

// Defining methods for the general API data
module.exports = {
  // get all the staff from the DB
  getAllStaff: async (req, res) => {
    const { rows: staff } = await db.getAllStaff();
    res.json(staff);
  },
};
