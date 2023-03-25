import express, { response } from "express";
import {
  getStudent,
  getStudents,
  deleteStudent,
  addStudent,
  updaetStudent,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);
router.post("/", addStudent);
router.patch("/:id", updaetStudent);

export default router;
