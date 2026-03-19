import Cart from "../models/Cart";
import Carte from "../models/Cart";

async function getCarts(req, res){
    try{
        const cart = await Cart.find()
        .populate("user")
        .populate("products.product");
        res.json(carts);
        
    }catch(error){
        console.error(error);
    }
};

async function getCartById(req,res){
    try{
        const id = req.params.id;
        const cart = await Cart.findById(id)
        .populate("user");
        .populate("products.product");
        if(!cart){
            return res.status(404).json({message: "Cart not found"});
        }

    }catch(error){
        console.error(error);
    }
}

async function getCartByUser(req, res){
    try{
        const userId = req.params.id;
        const cart = await Cart.findOne({user:userId})
        .populate("user")
        .populate("products.product");
        if(!cart){
            return res.status(404).json({message: "No cart found for this user"});
        }
        res.json(cart);
    }catch(error){
        console.error(error);
    }
}