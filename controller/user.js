import User from "../models/User.js";

export const getAllUser = async(req,res) => {
    try {
       const users = await User.findAll()
        if (users.length === 0) {
            return res.status(404).json({error:'no user found'})
        }
        return res.json(users)
    } catch (error) {
        
    }
}

export const createUser = async(req,res) => {
    const {username, email, password} = req.body
    try {
        if(!username || !email || !password) {
            return res.status(400).json({error:'username, email and password required'});
        }
        
    const userAlreadyexists = await User.findOne({where:{username}})
    if (userAlreadyexists){
        return res.status(400).json({error:'choose another username, this username already exists'})
    }
    const emailAlreadyExists = await User.findOne({where:{email}})
    if (emailAlreadyExists){
        return res.status(400).json({error:'email already registerd'})
    }
    const newUser = await User.create({
        username, 
        email, 
        password
    })
    return res.status(200).json(newUser)
    } catch (error) {
       res.status(400).json({error:'internal server error'})
    }
}