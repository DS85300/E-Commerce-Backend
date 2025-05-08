import { createProduct, getAllProducts, getProductById, deleteProduct,updateProduct} from "../controller/product.js";
import { Router } from "express";

const productRouter = Router()

productRouter.route('/').post(createProduct).get(getAllProducts);
productRouter.route('/:id').get(getProductById).delete(deleteProduct).put(updateProduct)
export default productRouter;
