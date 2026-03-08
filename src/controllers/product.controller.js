export const createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const product = {
      name,
      price,
      quantity
    };

    res.status(201).json({
      message: "Product created successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const getProducts = async (req, res) => {
  try {

    res.status(200).json({
      message: "Products fetched successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const updateProduct = async (req, res) => {
  try {

    res.status(200).json({
      message: "Product updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const deleteProduct = async (req, res) => {
  try {

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};