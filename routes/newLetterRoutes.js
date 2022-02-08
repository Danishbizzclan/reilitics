import express from 'express'
const router = express.Router();


import {getNewsLetter, createNewsletter} from '../controllers/newsLetterController.js'
import {protect , admin} from '../middleware/authMiddleware.js'

router.route("/").post(createNewsletter).get( getNewsLetter)

export default router