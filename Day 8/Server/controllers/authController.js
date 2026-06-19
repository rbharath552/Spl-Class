import bcrypt from 'bcrypt'
import authModle from '../models/authModel.js'


export const insertDatas = async(req,res)=>{

   const {username,userage} = req.body

    try {
        if(username=="Ravi")
        {
            const added = await authModle.create({username,userage})
            res.status(200).json({msg:"Successfully inserted",added})
        }
        
       else{
        res.status(400).json({msg:"Not allowed to insert"})
       }
       
       } catch (error) {

        console.log('error',error);
        
        
    }
    

}

export const loginDatas = async(req,res)=>{

   const {username,email,password} = req.body

    try {

          if (email === "admin@gmail.com" && password === "12345") {
        const hashed = await bcrypt.hash(password,10)
        const added = await authModle.create({username,email,password:hashed})
        res.status(200).json({msg:"Successfully insert"})
  }

  else{

    res.status(400).json({msg:"Invalid credentials"})
  }
  }
        
       
        
     catch (error) {

        console.log('error',error);
        
        
    }
    

}

export const getById=(req,res)=>{
    try{
        const{id}=req.params
        res.status(200).json({msg:"Id is:",id})
    }
    catch(error){
        console.log('error',error);
    }
}

export const search = (req, res) => {
    try {
        const { name } = req.body
        if(name=="Ravi"){
             res.status(200).json({
            success: true,
            search: name,
            message: "Search Completed"
        });

        }
        else{
                 res.status(400).json({msg:"Invalid credentials"})
        }

       
    }
    catch (error) {
        console.log("error", error);
    }
};

export const student = (req, res) => {
    try {
        const { name } = req.body;
        if(name=="Priya"){

            res.status(200).json({
            success: true,
            data: {
                name,
                course,
                city
            }
        });

        }
        else{
            res.status(400).json({msg:"Invalid credentials"})
        }


        
    }
    catch (error) {
        console.log("error", error);
    }
};
