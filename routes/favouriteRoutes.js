import express from 'express'
import { addFavourite, deleteFavourite, getFavourites } from '../controllers/favouriteController.js';
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.route('/').post(protect,addFavourite)

// router.route('/myfavourite').get(getFavourites)

router.route('/:id').delete(deleteFavourite).get(getFavourites)





export default router