import { Router } from "express";
import { UserService } from "./user.service";

const router = Router()

router.post("/register", UserService.createUser)

export const userRouter = router;