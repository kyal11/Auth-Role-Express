import Products from "../model/product.model.js"
import {Op} from "sequelize";
class productController {
    static async getProduct(req, res){
        try{
            const product = await Products.findAll({attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id']})
            if(product === null) return res.status(404).json({msg: "product data not found"})

            res.status(200).json(product)
        }catch(error){
            res.status(500).json({msg: error.message})
        }
    }

    static async getProductById(req, res){
        try{
            const product = await Products.findOne({
                attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id'],
                where: { id: req.params.id }
            })
            if(product === null) return res.status(404).json({msg: "product data not found"})

            res.status(200).json(product)
        }catch(error){
            res.status(500).json({msg: error.message})
        }
    }

    static async createProduct(req, res){
       const {name, price, qty} = req.body
       try {
            const user = req.userId
            await Products.create({
                name: name,
                price: price,
                qty: qty,
                user_id: user
            })

            res.status(201).json({msg: "Product Created Successfuly"});
       } catch (error) {
            res.status(500).json({msg: error.message});
       }
    }

    static async updateProduct(req, res){
        const { name, price, qty } = req.body;
        const update = {};
    
        if (name !== undefined) {
            update.name = name;
        }
        if (price !== undefined) {
            update.price = price;
        }
        if (qty!== undefined) {
            update.qty= qty;
        }
    
        try {
            if(req.role == "admin"){
                console.log('admin')
                 const product = await Products.findOne(
                    { attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id'],
                      where: { id: req.params.id } 
                    });
                 if (product == null) return res.status(404).json({ msg: "product not found" });
                 await Products.update(update, { where: { id: req.params.id } });
            }else if (req.role == "user"){
                console.log('user')
                const product = await Products.findOne(
                    { attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id'],
                      where: {
                        [Op.and]:[{id: req.params.id}, {user_id: req.userId}]
                     }   
                    });
                if (product == null) return res.status(404).json({ msg: "product not found" });
                await Products.update(update, { where: {id: req.params.id } })
            }
    
            res.status(200).json({ msg: "Update Product Successful" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async deleteProduct(req, res){
        try {
            if(req.role == "admin"){
                 const product = await Products.findOne(
                    {attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id'],
                     where: { id: req.params.id } });
                 if (product == null) return res.status(404).json({ msg: "product not found" });
                 await product.destroy({ where: { id: product.id } });
            }else if (req.role == "user"){
                const product = await Products.findOne(
                    {attributes: ['id', 'uuid', 'name', 'price', 'qty', 'user_id']
                    ,where: {
                        [Op.and]: [{id: req.params.id}, {user_id: req.userId}]
                     }   
                    });
                if (product == null) return res.status(404).json({ msg: "product not found" });
                await product.destroy({ where: { uuid   : product.uuid } });
            }
    
            res.status(200).json({ msg: "Delete Product Successful" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}

export default productController