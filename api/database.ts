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

// Get all sections
router.get("/sections", async (req, res) => {
    try {
        const sections = await prisma.sections.findMany();
        res.json(sections);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch sections" });
    }
});


// Get a specific section by title
router.get("/sections/:title", async (req, res) => {
    const { title } = req.params;
    try {
        const section = await prisma.sections.findUnique({
            where: { title },
            include: { subSections: true }, // Including subsections related to the section
        });

        if (section) {
            res.json(section);
        } else {
            res.status(404).json({ error: "Section not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch section" });
    }
});


// Get subsections of a specific section by section ID
router.get("/sections/:sectionTitle/subsections", async (req, res) => {
    const { sectionTitle } = req.params;
    try {
        const subsections = await prisma.subSections.findMany({
            where: { sectionsId: sectionTitle }, // Find subsections for the given section ID
        });

        if (subsections.length > 0) {
            res.json(subsections);
        } else {
            res.status(404).json({ error: "No subsections found for this section" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch subsections" });
    }
});

// Get a specific subsection by ID
router.get("/subsections/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const subsection = await prisma.subSections.findUnique({
            where: { id },
        });

        if (subsection) {
            res.json(subsection);
        } else {
            res.status(404).json({ error: "Subsection not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch subsection" });
    }
});

export default router;
