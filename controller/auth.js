import Users from "../model/user.model.js";
import  argon2 from "argon2";
import userController from "../controller/users.js";

class Auth {
    static async Register(req, res){
        userController.createUser(req, res);
    }

    static async Login(req, res){
        try{
            const user = await Users.findOne({
                where:{ email: req.body.email}
            });
            if (user == null) return res.status(404).json({ msg: "Account not found" });

            const match = argon2.verify(user.password, req.body.password);
            if(!match) return res.status(400).json({msg: "Wrong Password"});
            req.session.userId = user.uuid;
            const uuid = user.uuid;
            const name = user.name;
            const email = user.email;
            const role = user.role;
            return res.status(200).json({uuid, name, email, role});

        }catch(error){
            res.status(500).json({ msg: error.message });
        }
    }

    static async getAccount(req, res){
        try {
            if(!req.session.userId) return res.status(401).json({msg: "Please login to your account!"});
            const user = await Users.findOne({
            attributes:['uuid', 'name', 'email', 'role'],
            where:{
                uuid: req.session.userId
            }});
            if(!user) return res.status(404).json({msg: "Account not found"});
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async Logout(req, res){
        try {
            req.session.destroy((error)=>{
                if(error) return res.status(400).json({msg: "Cannot log out"});
                res.status(200).json({msg: "You have logged out"});
            });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}

export default Auth;