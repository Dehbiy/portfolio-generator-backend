import express from "express";
import apiRoutes from "./api";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Portfolio API");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
