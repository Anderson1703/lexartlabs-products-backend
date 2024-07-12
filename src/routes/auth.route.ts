import { Router } from 'express';
import { loginUserController } from '../controllers/auth/login.controller';
import { registerUserController } from '../controllers/auth/register.controller';

const AuthRouter = Router();

AuthRouter.post("/login", loginUserController);

AuthRouter.post("/register", registerUserController);

export default AuthRouter;