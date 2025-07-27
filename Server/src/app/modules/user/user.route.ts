import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";
import { userController } from "./user.controller";
import { Role } from "./user.interface";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/register", validateRequest(createUserZodSchema), userController.createUser)
router.get("/users", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), userController.getAllUsers)
router.patch("/:id", validateRequest(updateUserZodSchema), checkAuth(...Object.values(Role)), userController.updateUser)

export const userRouter = router;