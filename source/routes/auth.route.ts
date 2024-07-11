import { Router } from 'express';
import { loginUserController } from '../controllers/auth/login.controller';
import { registerUserController } from '../controllers/auth/register.controller';
const AuthRouter = Router();

AuthRouter
    .route("/login")
    .post(loginUserController)

AuthRouter
    .route("/register")
    .post(registerUserController)

export default AuthRouter;