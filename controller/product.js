import { Op } from "sequelize";
import Product from "../models/product.js";
import Category from "../models/category.js";

export const createProduct = async(req,res)=>{
    try {
        const {name, description, price, categoryId} = req.body
        if(!name || !description || !price || !categoryId){
           return res.status(400).json({error:'name, description, price and category are rewuired'})
        }
        const alreadyExists = await Product.findOne({where:{name,price,categoryId}});
        if(alreadyExists){
            return res.status(409).json({error:'product already exists'})
        }
        const product = await Product.create({
            name,
            description,
            price,
            categoryId
        });
      
       
       res.status(201).json(product)
    } catch (error) {
        console.error('something went wrong',error)
        
    }
};

export const getAllProducts = async(req,res) => {
    try {
        const products = await Product.findAll();
        if(products.length === 0){
            return res.status(404).json({error:'no products found'})
        }
        res.status(200).json(products)
    } catch (error) {
        console.error('something went wrong, internal server problem', error)
        
    }
}

export const getProductById = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByPk(id)
        if(!product) {
            return res.status(404).json({error:'product does not exist'})
        }
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:'something went wrong'})
    }
}

export const getProductByName = async(req,res) => {
    try {
        const {search} = req.params
        const product = await Product.findAll({where:{
            name:{
                [Op.iLike]: `%${search}%` //op.like= case unsenstitve , %inludes the name
            }}})
        if(product.length===0){ //!product would give back an empty array,cause  always truthy
            return res.status(404).json({error:'product does not exist'})
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({error: 'internal server error'})
    }
}

export const deleteProduct = async(req,res) => {
    try {
        const {id} = req.params 
        if(!id) {
            return res.status(400).json({error:'ID needed' })
        }
        const deletedProduct = await Product.destroy({where:{id}})
        if(deletedProduct===0){
            return req.status(404).json({error: 'Product not found'})
        }
      
        res.status(200).json({message:'product deleted'})
    } catch (error) {
        console.error('something went wrong', error)
        
    }
}
export const updateProduct = async(req,res) => {
    try {
       const {id} = req.params
       const {name, price, description, categoryId} = req.body
       const updatedProduct = await Product.update({
        name,
        price,
        description,
        categoryId},{where:{id}, returning:true});
        
        res.json(updatedProduct)


    } catch (error) {
        console.error('something went wrong', error)
        
    }
}

export const getProductByCategory = async(req,res) => {
    try {
        const {categoryName} = req.params
        const products  = await Product.findAll({
            include: [{
                model: Category,
                where: {
                    name: {
                        [Op.iLike]: `%${categoryName}%`
                    }
                },
                attributes: ['name']
            }]})
        if(products.length===0){
            return res.status(404).json({error:'no products for this category'})
        }
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({error:'INternal server error'})
    }
}