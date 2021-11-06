import Food from "../model/Food.js";

export const insertFoodItem = async (req,res) => {

    const item = req.body;

    const newFood = new Food(item);

    try {
        await newFood.save();
        res.send({success:true,message:"Successfully Inserted"});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const getFoodItems = async (req,res) => {

    try{
        const allFoodItems = await Food.find();
        res.send({data:allFoodItems,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

