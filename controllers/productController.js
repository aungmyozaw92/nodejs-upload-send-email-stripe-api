const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({product})
}

const getProducts = async (req, res, next) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({ products })
}

module.exports = {
    createProduct,
    getProducts
}