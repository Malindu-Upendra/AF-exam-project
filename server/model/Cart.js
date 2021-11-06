import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required:true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

const Cart = mongoose.model('carts', CartSchema);
export default Cart;