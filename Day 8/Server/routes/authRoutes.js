import express from 'express'
import { insertDatas,loginDatas,getById,search,student} from '../controllers/authController.js'


const routes = express.Router()

routes.post('/login',loginDatas)

routes.post('/register',insertDatas)
routes.get('/getById/:id',getById)
routes.get("/search",search)
routes.post("/student",student)


export default routes


// http://localhost:5000/api/auth/register

// http://localhost:5000/api/auth/login
// http://localhost:5000/api/auth/getById/
// http://localhost:5000/api/auth/search
// http://localhost:5000/api/auth/student