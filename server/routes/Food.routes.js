import express from "express";
import { insertFoodItem , getFoodItems } from "../dbFunctions/Food.db.js";
const router = express.Router();

router.post('/insertFoodItem', insertFoodItem);
router.get('/getFoodItems', getFoodItems);

export default router;