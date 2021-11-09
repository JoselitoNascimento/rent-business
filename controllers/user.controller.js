const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const db = require("../dbconfig");
// const { validationResult } = require('express-validator');

// ==> Método responsável por criar um novo 'Usuario':

exports.createUser = async (req, res) => {
/*
    const { errors } = validationResult(req);
  if (errors.length > 0) {
    return res.status(400).send({ message: errors })
  }
*/
  const { email, userName, category, status } = req.body;
  const password = bcrypt.hashSync(req.body.password, salt)
  await db.query(
    "INSERT INTO user (email, password, userName, category, status) VALUES ($1, $2, $3, $4, $5)",
    [email, password, userName, category, status]
  );

  res.status(201).send({
    message: "user added successfully!",
    body: {
      product: { email, userName, category, status }
    },
  });
};

// ==> Método responsável por listar todos os 'Usuarios':
exports.listAllUsers = async (_, res) => {
  const response = await db.query('SELECT email, userName, category, status, createAt, updateAt FROM user ORDER BY userName ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por logar o 'Usuario':
exports.loginUser = async (req, res) => {
/*
    const { errors } = validationResult(req);
  if (errors.length > 0) {
    return res.status(400).send({ message: errors })
  }
*/
  const email = req.body.email;
  const password = req.body.password;

  const response = await db.query('SELECT id, email, userName, category, status FROM user WHERE email = $1 ',
    [email]
  );

  if (response.rows.length === 0) {
    return res.status(400).send('usuário não cadastrado!');
  }

  const passHashedDB = response.rows[0].password;
  const match = await bcrypt.compare(password, passHashedDB);

  if (match) {
    return res.status(200).send(response.rows);
  } else {
    return res.status(400).send('usuário não cadastrado!');
  }

};
  
