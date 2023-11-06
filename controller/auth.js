import Users from "../model/user.model";
import  argon2 from "argon2";

class Auth {
    static async Login(req, res){
        try{
            const user = await Users.findOne({
                where:{ email: req.body.email}
            })
            if (user == null) return res.status(404).json({ msg: "Account not found" });

            const match = argon2.verify(user.password, req.body.password)

        }catch(error){
            res.status(500).json({ msg: error.message });
        }
    }

    static async getAccount(req, res){

    }

    static async Logout(req, res){

    }
}

export default Auth