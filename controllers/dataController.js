// const db = require('../models');

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    console.log('DATA - FINDALL - ', req.body);
    res.json(req.body);
  },
};
