import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return aiClient;
  }

  // API Health Endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Chanti Real Estate API", location: "Visakhapatnam, India" });
  });

  // AI Property Concierge Endpoint
  app.post("/api/ai-concierge", async (req, res) => {
    try {
      const { userQuery, preferences, budget, locality } = req.body;
      const ai = getGeminiClient();

      if (!ai) {
        return res.json({
          recommendation: `Welcome to Chanti Real Estate! Based on your criteria in ${locality || "Visakhapatnam"} (Budget: ${budget || "flexible"}), we highly recommend exploring our VMRDA-approved developments in Beach Road, Rushikonda, and Madhurawada. Contact Mr. Tadivalasa Chanti directly at +91 98765 43210 for exclusive site visits.`
        });
      }

      const prompt = `You are the chief AI Real Estate Advisor for "Chanti Real Estate", Visakhapatnam's premier luxury real estate agency led by Founder & MD Mr. Tadivalasa Chanti (15+ years experience in Vizag property market).

User Input:
- Locality Interest: ${locality || "Any prime location in Visakhapatnam"}
- Budget Range: ${budget || "Flexible"}
- Preferences/Requirements: ${preferences || "Seeking high ROI or dream home"}
- Specific Question: ${userQuery || "Recommend the best real estate investment in Vizag"}

Provide an authoritative, elegant, and highly informative advice note tailored for Vizag real estate:
1. Recommend 2-3 specific top areas in Vizag (e.g. Beach Road for ultra-luxury oceanfront living, Rushikonda/Yendada for IT Corridor proximity & villas, Madhurawada for high-growth gated communities, Bheemili/Kapuluppada for VMRDA open plot investment).
2. Detail critical advantages: VMRDA/RERA approval, clear title deeds, Vastu compliance, and projected annual appreciation rates in Vizag.
3. Invite the client to book a complimentary chauffeur-driven site visit with Chanti Real Estate.
Keep the tone polite, knowledgeable, structured with bullet points, and concise (under 220 words).`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      res.json({
        recommendation: response.text || "Thank you for consulting Chanti Real Estate. We are delighted to guide your property journey in Visakhapatnam."
      });
    } catch (error: any) {
      console.error("AI Concierge API Error:", error);
      res.json({
        recommendation: `Thank you for reaching out to Chanti Real Estate. Visakhapatnam's real estate market offers exceptional opportunities in Rushikonda (IT Corridor), Beach Road (Oceanfront Luxury), and Madhurawada (Gated Communities). Call +91 98765 43210 to speak directly with our property advisors.`
      });
    }
  });

  // Serve static files or Vite dev middleware
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Chanti Real Estate server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
