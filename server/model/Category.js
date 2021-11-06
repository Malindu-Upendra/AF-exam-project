import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required:true,
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'foods' }]
});

const Category = mongoose.model('categories', CategorySchema);
export default Category;