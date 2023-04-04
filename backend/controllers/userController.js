const database = require("../database/models");
const jwt = require('jsonwebtoken')

function getUsers(req, res){
  
  database.User.findAll().then((data) =>{
    res.json(data)
  })
}

function getUserById(req, res) {
  const { id } = req.params;
  database.User.findByPk(id).then((data) => {
    return res.json(data);
  });
}

function createUser(req, res) {// Criar ou alterar - Validações são obrigatórias
    const { nome, email, senha } = req.body;
    database.User.create({
      Nome: nome,
      Email: email,
      Senha: senha,
   
    }).then((data) => {
      return res.json(data);
    });
  }

  function updateUser(req, res){
    let {id} = req.params
    let  { nome, email, senha} = req.body
    database.User.update({
      Nome: nome,
      Email: email,
      Senha: senha,
    },
    {
      where: {
        Id: id
      }
    })

    res.redirect('/user')
  }

  function deleteUser(req, res) {

    let { id } = req.params;
  
    database.User.destroy({ where: { id, } });
  
    res.redirect('/user');
  }


  function login(req, res){

      const {email, password} = req.body

      database.User.findOne({
        where: {
          Email: email,
          Senha: password
        }
      }).then((data) =>{
        if(!data){
          return res.status(401).json({ error: "Credenciais inválidas" });
        }

        const token = jwt.sign({
          Id: data.dataValues.Id,
          Nome: data.dataValues.Nome,
          Email: data.dataValues.Email
        }, "MinhaChaveSecreta")

        return res.json({token})
      })

  }
  module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUser,
    updateUser,
    login
  }