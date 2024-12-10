import { Router } from "express";
import dbRoutes from "./database";

const router = Router();

router.use("/db", dbRoutes);

export default router;