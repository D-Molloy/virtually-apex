const db = require('../db');
module.exports = {
  create: async function (req, res) {
    // TODO: validate name, email, password, confirm password
    try {
      // get all users
      // const { rows: users } = await db.getAllUsers();
      // res.json(users);
      // --------
      // find one user
      // const { rows: foundUser } = await db.findUser('den@test.com');
      // res.json({ foundUser });

      // -------
      // create user
      await db.createUser('Cinta', 'cin@test.com', '123456');

      res.send('User created!');
    } catch (e) {
      console.log(e.message);
      res
        .status(500)
        .send({
          message: 'User already exists.  Please login.',
          data: e.message,
        });
    }
  },
  login: function (req, res) {
    console.log('AUTH - LOGIN - ', req.body);
    res.json(req.body);
  },
};
