import Category from "../model/Category.js";

export const insertCategory = async (req,res) => {

    const sub = req.body;
    const newCategory = new Category(sub);

    try {
        await newCategory.save();
        res.send({success:true,message:"Successfully Inserted"});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const getCategories = async (req,res) => {

    try {
        const allCategories = await Category.find();
        res.send({data:allCategories,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const getFoodForEachCategory = async (req,res) => {
    const id = req.params.id;

    try{
        const allfoodItems = await Category.find({_id:id}).populate('foods','code name amount size');
        res.send({data:allfoodItems,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const getFoodsWithoutID = async (req,res) => {

    try{
        const items = await Category.find({}).populate('foods','code name amount size');
        res.send({data:items,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }
}

export const getOnlyCategories = async (req,res) => {

    try{
        const items = await Category.find();
        res.send({data:items,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}