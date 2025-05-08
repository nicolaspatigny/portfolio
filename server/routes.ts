import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate inputs
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real application, you would send an email or store in a database
      // For now, just return a success response
      
      return res.status(200).json({ 
        message: "Message received successfully", 
        success: true 
      });
      
    } catch (error) {
      console.error("Error in contact form submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
