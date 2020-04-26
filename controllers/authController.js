// Defining methods for the bookController
module.exports = {
  create: function (req, res) {
    console.log('AUTH - CREATE - ', req.body);
    res.json(req.body);
  },
  login: function (req, res) {
    console.log('AUTH - LOGIN - ', req.body);
    res.json(req.body);
  },
};
