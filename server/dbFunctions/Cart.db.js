import Cart from "../model/Cart.js";
import * as mongoose from "mongoose";
//import * as mongoose from "mongoose";

export const insertFoodItemtoCart = async (req,res) => {

    const item = req.body;

    const amount = item.size * item.amount;
    item.amount = amount;

    const newItem = new Cart(item);

    try {
        await newItem.save();
        res.send({success:true,message:"Successfully Added"});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const getAllItems = async (req,res) => {

    try{
        const allCartItems = await Cart.find();
        res.send({data:allCartItems,success:true});
    }catch (e) {
        res.status(409).json({message : e.message});
    }

}

export const removeCollection = async (req,res) => {

    Cart.deleteMany(function(err) {
        if(err) throw err
        res.send({success:true,message:"Order Placed Successfully"});
    });

}