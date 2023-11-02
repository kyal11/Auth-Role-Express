import Users from "../model/user.model"
import  argon2  from "argon2"

class userController{
    async getUser(req, res){
        try{
            const user = await Users.findAll()
            if(user == null) return res.status(404).json({msg: "user data not found"})
            res.status(200).json(user)
        }catch(err){
            res.status(500).json({msg: error.message})
        }
    }

    async getUserById(req, res){
        try{
            const user = await Users.findOne({
                where: {
                    uuid:req.params.id
                }
            })
            if(user == null) return res.status(404).json({msg: "user data not found"})
            res.status(200).json(user)
        }catch(err){
            res.status(500).json({msg: error.message})
        }
    }

    async createUser(req, res){
        const {name, email, password, confPassword, role} = req.body
        if(password != confPassword) return res.status(400).json({msg: "Password and confirm Password don't match"})
        
        try{
            await Users.create({
                name: name,
                email: email,
                password: await argon2.hash(password),
                role: role
            })   
            res.status(201).json({msg: "Register Successful"})
        }catch(err){
            res.status(500).json({msg: error.message})
        }
    }

    async updateUser(){
        
    }

    async deleteUser(){
        
    }
}

module.exports = userController