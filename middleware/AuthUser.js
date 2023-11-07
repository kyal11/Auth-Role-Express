import Users from "../model/user.model.js";

export const userVerification = async (req, res, next) => {
    if(!req.session.userId) return res.status(401).json({msg: "Please login to your account!"});
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role; 
    next();
};

export const onlyAdmin = async (req, res, next) => {
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(user == null) return res.status(404).json({msg: "user data not found"});
    if(user.role !== "admin") return res.status(403).json({msg: "access denied"});

    next();
};