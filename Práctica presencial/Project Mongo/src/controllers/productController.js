import Product from "../models/Product";

const searchProducts = async (req, res, next) => {
  try {
    const {
      q,
      category,
      minPrice,
      maxPrice,
      inStock,
      sort,
      order,
      page = 1,
      limit = 10,
    } = req.query;

    let filter = {};
    if(q){
        filters.$or=[
            {name: {$regex: q, $options:"i"}},
            {description:{$regex:q,$option:"i"}}
        ]
    }
    if(category)filters.category=category;
    if(minPrice || maxPrice){
        filter.price={};
        if(minPrice)
            filter.price.$gte = parseFloat(minPrice);
        if(maxPrice) filters.price.$lte=parseFloat(maxPrice);
    }
    if(inStock==="true") filter.stock={$gt: 0};
    else if(inStock==="false") filters.stock={$lte:0};

    let sortOption = {};
    if(sort){
        const sortOrder = order === "desc" ? -1 : 1;
        sortOptions[sort] = sortOrder;
    }else{
        sortOptions.createAt = -1;
    }

    const skip = (parseInt(page)-1)*parseInt(limit);

    const products = await Product.find(filters)
    .populate("category")
    .sort(sortOption)
    .skip(skip)
    .limit(parseInt(limit));

    const totalProduct = await products.countDocuments(filters);
    const totalPages = Math.ceil(totalResults/parseInt(limit));

    res.json({
        products,pagination:{
            currentPage:parseInt(page),
            totalPages,
            totalResults: totalProducts,
            hasNext: parseInt(page)<totalPages,
            hasPrev: parseInt(page) > 1
        },
    })
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
