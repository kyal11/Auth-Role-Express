//import { Sequelize } from "sequelize"
import Users from "../model/user.model.js";
import  argon2  from "argon2";

class userController{
    static async getUser(req, res){
        try{
            const user = await Users.findAll();
            if(user === null) return res.status(404).json({msg: "user data not found"});
            res.status(200).json(user);
        }catch(err){
            res.status(500).json({msg: error.message});
        }
    }

    static async getUserById(req, res){
        try{
            const user = await Users.findOne({
                where: {
                    uuid: req.params.id
                }
            });
            if(user == null) return res.status(404).json({msg: "user data not found"});
            res.status(200).json(user);
        }catch(err){
            res.status(500).json({msg: error.message});
        }
    }

    static async createUser(req, res){
        const {name, email, password, confPassword, role} = req.body;
        if(password != confPassword) return res.status(400).json({msg: "Password and confirm Password don't match"});
        
        try{
            await Users.create({
                name: name,
                email: email,
                password: await argon2.hash(password),
                role: role
            });   
            res.status(201).json({msg: "Register Successful"});
        }catch(error){
            res.status(500).json({msg: error.message});
        }
    }

    static async updateUser(req, res) {
        const { name, email, password } = req.body;
        const update = {};
    
        if (name !== undefined) {
            update.name = name;
        }
        if (email !== undefined) {
            update.email = email;
        }
        if (password !== undefined) {
            update.password = await argon2.hash(password);
        }
    
        try {
            const user = await Users.findOne({ where: { uuid: req.params.id } });
            if (user == null) return res.status(404).json({ msg: "User data not found" });
            await Users.update(update, { where: { uuid: req.params.id } });
            res.status(200).json({ msg: "Update Account Successful" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    

    static async deleteUser(req, res){
        try{
            const user = await Users.findOne({ where: {
                uuid: req.params.id
            }});
            if(user == null) return res.status(404).json({msg: "user data not found"});

            user.destroy({where:{ uuid: user.uuid}});
            res.status(201).json({msg: "Delete Account Successful"});
        }catch(error){
            res.status(500).json({ msg: error.message });
        }   
    }
}

export default userController;