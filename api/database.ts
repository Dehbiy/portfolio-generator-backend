import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get user information
router.get("/", async (req, res) => {
    try {
        const user = await prisma.user.findFirst();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch owner" });
    }
});

export default router;
