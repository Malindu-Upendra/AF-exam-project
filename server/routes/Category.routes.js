import express from "express";
import {
    insertCategory ,
    getCategories ,
    getFoodForEachCategory ,
    getFoodsWithoutID,
    getOnlyCategories} from "../dbFunctions/Category.db.js";
const router = express.Router();

router.post('/insertCategory', insertCategory);
router.get('/getCategories', getCategories);
router.get('/getCategory/:id', getFoodForEachCategory);
router.get('/getCat', getFoodsWithoutID);
router.get('/onlyCategories', getOnlyCategories);

export default router;