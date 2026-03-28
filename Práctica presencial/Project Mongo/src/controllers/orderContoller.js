import express from "express";
import Order from "../models/Order";

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("User")
      .populate("products.productId")
      .populate("address")
      .populate("paymentMethod");
    res.json(orders);
  } catch (error) {
    console.error(error);
  }
};

const getOrdersById = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id)
      .populate("User")
      .populate("products.productId")
      .populate("address")
      .populate("paymentMethod");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
  }
};
const getOrderByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const order = await Order.findOne({ User: userId })
      .populate("User")
      .populate("products.productId")
      .populate("address")
      .populate("paymentMethod");
    if (!order) {
      return res.status(404).json({ message: "Nothing found for this user" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
  }
};
const createOrder = async (req, res) => {
  try {
    const [
      user,
      products,
      address,
      paymentMethod,
      shippingCost,
      totallPrice,
      status,
      paymentStatus,
    ] = req.body;

    const { id } = req.params;

    if (
      !user ||
      !products ||
      !address ||
      !paymentMethod ||
      !shippingCost ||
      !totallPrice ||
      !status ||
      !paymentStatus ||
      !Array.isArray(products)
    ) {
      return res.status(404).json({
        error: "Each field is required, and products must be an array ",
      });
    }
    for (let i = 0; i < products.length; i++) {
      if (
        !products[i].productId ||
        !products[i].quantity ||
        !products[i].price ||
        products.quantity <= 0 ||
        products.price < 0
      ) {
        return res.status(400).json({
          error: "Each product must have a product ID and quanty and price < 0",
        });
      }
    }

    const newOrder = await Order.create(
      {
        user,
        products,
        address,
        paymentMethod,
        shippingCost,
        totallPrice,
        status,
        paymentStatus,
      },
    )
      await newOrder.populate("User");
      await newOrder.populate("products.productId");
      await newOrder.populate("address");
      await newOrder.populate("paymentMethod");

      res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
  }
};


const updateOrder = async (req, res) => {
  try {
    const [
      user,
      products,
      address,
      paymentMethod,
      shippingCost,
      totallPrice,
      status,
      paymentStatus,
    ] = req.body;

    const { id } = req.params;

    if (
      !user ||
      !products ||
      !address ||
      !paymentMethod ||
      !shippingCost ||
      !totallPrice ||
      !status ||
      !paymentStatus ||
      !Array.isArray(products)
    ) {
      return res.status(404).json({
        error: "Each field is required, and products must be an array ",
      });
    }
    for (let i = 0; i < products.length; i++) {
      if (
        !products[i].productId ||
        !products[i].quantity ||
        !products[i].price ||
        products.quantity <= 0 ||
        products.price < 0
      ) {
        return res.status(400).json({
          error: "Each product must have a product ID and quanty and price < 0",
        });
      }
    }

    const updateOrder = await Order.findByIdAndUpdate(
      id,
      {
        user,
        products,
        address,
        paymentMethod,
        shippingCost,
        totallPrice,
        status,
        paymentStatus,
      },
      { new: true },
    )
      .populate("User")
      .populate("products.productId")
      .populate("address")
      .populate("paymentMethod");

      if(updateOrder){
        return res.status(200).json(updateOrder);
      }else{
        return res.status(200).json({message: "Order not found"});
      }
  } catch (error) {
    console.error(error);
  }
};

const deleteOrder = async(req, res) => {
  try {
    const {id} =req.params;
    const deletedOrder = await Cart.findByIdAndDelete(id);

    if (deleteOrder){
        return res.status(204).send();
    }else{
        return res.statis(400).json({message:"Order not found"});
    }
  } catch (error) {
    console.error(error);
  }
};

export {getOrders, getOrdersById, getOrderByUser, createOrder, updateOrder, deleteOrder};