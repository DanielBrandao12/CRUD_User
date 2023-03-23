const database = require("../database/models");


//mostra todos os enderços cadastrados no sistema
function getAddressAll(req, res){
    
    database.Address.findAll().then((data) =>{
      res.json(data)
    })
  }

//mostrar todos os enderços do usuario usando id 
function getAddress(req, res){
    let {id} = req.params
    database.Address.findAll(
        {
            where: {
                User_id: id,
            }
        }
    ).then((data) =>{
      res.json(data)
    })
  }

//pega endereço pelo id
function getAddressPk(req, res ){
    let { id } = req.params;
      database.Address.findByPk(id).then((data) =>{
        
        return res.json(data);
      })
  }

//Adicionar endereço 
function createAddress(req, res) {
    
    let { id, rua, numero, bairro, cidade, estado } = req.body
    database.Address.create({
      User_id: id,
      Rua: rua,
      Numero: numero,
      Bairro: bairro,
      Cidade: cidade,
      Estado: estado,
    }).then((data) => {
        return res.json(data);
      })
   
  
  }




  //update address
  function updateAddress(req, res){
    let {id} = req.params
    let {  rua, numero, bairro, cidade, estado } = req.body
    database.Address.update({
        Rua: rua,
        Numero: numero,
        Bairro: bairro,
        Cidade: cidade,
        Estado: estado,
    },
    {
      where: {
        Id: id
      }
    })

    res.redirect('/address')
  }
  
  //deletar endereço
  function deleteAddress(req, res) {
  
    let { id } = req.params;
  
    database.Address.destroy({ where: { id, } })
      
  
    return res.redirect('/address')
  
   
  
  }
  

  
  module.exports = {
    createAddress,
    deleteAddress,
    getAddress,
    updateAddress,
    getAddressPk,
    getAddressAll
  };