

import express from "express";
import { getAllScientists, getScientists, createScience, updateScience, deleteScience } from "../controllers/scienceController.js";
import { validateScienceInput,validateIdParam } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.get("/", getAllScientists);
router.get("/:id",validateIdParam, getScientists);
router.post("/",validateScienceInput, createScience);
router.patch("/:id",validateScienceInput,validateIdParam, updateScience);
router.delete("/:id",validateIdParam, deleteScience);

export default router;
