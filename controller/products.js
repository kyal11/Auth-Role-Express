import Products from "../model/product.model.js"

class productController {
    static async getProduct(req, res){
        try{
            const product = await Products.findAll()
            if(product === null) return res.status(404).json({msg: "product data not found"})

            res.status(200).json(product)
        }catch(error){
            res.status(500).json({msg: error.message})
        }
    }

    static async getProductById(req, res){
        try{
            const product = await Products.findOne({
                where:{ uuid: req.params.uuid }
            })
            if(product === null) return res.status(404).json({msg: "product data not found"})

            res.status(200).json(product)
        }catch(error){
            res.status(500).json({msg: error.message})
        }
    }

    static async createProduct(req, res){
       
    }

    static async updateProduct(req, res){

    }

    static async deleteProduct(req, res){

    }
}

export default productController