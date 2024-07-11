import { Router } from 'express';
import getAccess from '../middlewares/auth.middleware';
import { getOneUserController } from '../controllers/users/get-one.controller';
const UsersRouter = Router();

UsersRouter
    .route("/me")
    .get(
        getAccess,
        getOneUserController
    )

export default UsersRouter;