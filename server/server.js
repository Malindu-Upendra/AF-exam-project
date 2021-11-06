import express from 'express';
import mongoose from'mongoose';
import cors from'cors';
import bodyParser from'body-parser';
import Food from "./routes/Food.routes.js";
import Category from "./routes/Category.routes.js";
import Cart from "./routes/Cart.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://malindu:MoeEwseuOK65ZwYw@cluster0.dgzqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true, useFindAndModify:false}).
then(() => app.listen(PORT,() => console.log(`connection stablished successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

app.use('/food',Food);
app.use('/category',Category);
app.use('/cart',Cart)