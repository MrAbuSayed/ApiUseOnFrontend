const express=require('express');
const cors=require('cors');
const products = require('./model/products');
const app=express();
const port=2025;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/",(req,res)=>{
    res.send(`<h1>Hi.......!!!!!!!!!!!</h1>`);
});

app.get("/products",(req,res)=>{
    res.status(200).json(products);
});

app.listen(port,()=>{
 console.log(`The Server Is running on http://localhost:${port}`);
});

