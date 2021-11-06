import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        unique:true
    },
    amount: {
        type: Number,
        required:true,
    },
    size:{
        type:Number,
        default:1
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'categories' }]
});

const Food = mongoose.model('foods', FoodSchema);
export default Food;