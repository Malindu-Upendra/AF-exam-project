import express from "express";
import { insertFoodItemtoCart , getAllItems , removeCollection } from "../dbFunctions/Cart.db.js";
const router = express.Router();

router.post('/insertToCart', insertFoodItemtoCart);
router.get('/getAllItems', getAllItems);
router.delete('/deleteCart', removeCollection)

export default router;