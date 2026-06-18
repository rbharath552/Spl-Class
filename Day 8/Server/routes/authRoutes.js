import express from 'express'
import { insertDatas} from '../controllers/authController.js'


const routes = express.Router()


routes.post('/register',insertDatas)


export default routes


// http://localhost:5000/api/auth/register
