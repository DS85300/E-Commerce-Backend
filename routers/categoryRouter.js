import { Router } from "express";
import { createCategory,
        getAllCategories,
        getCategorybyId,
         updateCategoryByName,
        updateCategoryById  } from "../controller/category.js";

const categoryRouter = Router()

categoryRouter.route('/').post(createCategory).get(getAllCategories)
categoryRouter.route('/:id').get(getCategorybyId).put(updateCategoryById)
categoryRouter.route('/:name').put(updateCategoryByName)
export default categoryRouter;
