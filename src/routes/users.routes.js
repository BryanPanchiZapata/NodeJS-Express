import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  getPing
} from "../controllers/users.controller.js";

const router = Router();

router.get("/", getPing);

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

export default router;
