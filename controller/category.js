import Category from "../models/category.js";

export const createCategory = async(req,res) => {

    try {
        const {name} = req.body
        if(!name){
            res.status(400).json({error: 'please insert a category'})
        }
        const alreadyExists= await Category.findOne({where:{name}})
        if(alreadyExists){
            return res.status(400).json({error:'category already exists'})
        }
        const newCategory= await Category.create({name})
        return res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

export const getAllCategories = async(req,res) => {
    try {
        const categories = await Category.findAll()
       return res.status(200).json(categories)
    } catch (error) {
        res.status(200).json({error:'internal server error'})
        }
}

export const getCategorybyId = async(req,res) =>{
    try {
        const {categoryId} = req.params
        const category = await Category.findByPk(categoryId)
        if(!category){
            return res.status(404).json({error:'category doesnt exist'})
        }
        return res.status(200).json(category)
    } catch (error) {
        res.status(400).json({error:'something went wrong'})
    }
}

export const updateCategoryByName = async(req,res) => {
   try {
     const {name} = req.params
     const {newName}= req.body
     if(!newName || newName.trim()===''){
        return res.status(400).json({error:'newName is required'})
     }
    const existingCategory = await Category.findOne({where:{name}})
    if(!existingCategory) return res.status(404).json({error:'category doesnt exist'})
    
        existingCategory.name = newName;
        await existingCategory.save();
        return res.status(200).json({message: 'Category updated', category: existingCategory})
   } catch (error) {
    console.error('Upfdate category error', error);
    return res.status(500).json({error:'internal server error'})
   }
}

export const updateCategoryById = async(req,res) => {
  try {
    const {id} = req.params
    const {name} = req.body

    if(!name || name.trim() ==='') return res.status(400).json({error:'New category Name is required'});
    if(!id || isNaN(id)) return res.status(400).json({error:"no category for this ID found"})

    const category = await Category.findByPk(id)
    if(!category) return res.status(404).json({error:'category not found'})
    
    const existing =await Category.findOne({where:{name}})
    if (existing && existing.id !== Number(id)) return res.status(409).json({error:'category already in use'});

    category.name = name;
    await category.save()
    return res.status(200).json({message:'category succesfully updated',category})
    
  } catch (error) {
    console.error('update by ID error:', error)
    return res.status(500).json({error: 'Internal server error'})
  }
};