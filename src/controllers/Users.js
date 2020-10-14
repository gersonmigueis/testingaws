const database = require('../models');

class Users {

    static async create(request, response){
        const user = request.body;
        console.log('Objeto --> ')
        console.log(user);
        try{
            const saveUser = await database.Users.create(user);
            return response.status(200).json(saveUser);
        }catch(erro){
            return response.status(500).json({message: erro.message});
        }
    }

    static async index(request, response){

        try{
            const list = database.Users.findAll();
            return response.status(200).json(list);
        }catch(erro){
            return respons.status(500).json({messagem: erro.message});
        }
    }
}

module.exports = Users;