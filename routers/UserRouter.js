import { Router } from "express";
import { createUser,getAllUser } from "../controller/user.js";

const userRouter = Router();

userRouter.route('/').get(getAllUser).post(createUser)

export default userRouter;
