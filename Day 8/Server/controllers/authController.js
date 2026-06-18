import bcrypt from 'bcrypt'
import authModle from '../models/authModel.js'


export const insertDatas = async(req,res)=>{

   const {username,email,password} = req.body

    try {
        
        const hashed = await bcrypt.hash(password,10)
        const added = await authModle.create({username,email,password:hashed})
        res.status(201).json({msg:"Successfully insert"})
        
    } catch (error) {

        console.log('error',error);
        
        
    }
    

}