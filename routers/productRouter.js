import { createProduct,
     getAllProducts,
      getProductById,
       deleteProduct,
       updateProduct,
       getProductByName,
       getProductByCategory
     } from "../controller/product.js";
import { Router } from "express";

const productRouter = Router()

productRouter.route('/').post(createProduct).get(getAllProducts);
productRouter.route('/id/:id').get(getProductById).delete(deleteProduct).put(updateProduct)
productRouter.route('/search/:search').get(getProductByName)
productRouter.route('/category/:categoryName').get(getProductByCategory)
export default productRouter;
