// server/server.js
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Load environment variables
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static frontend (from dist folder)
app.use(express.static(path.join(__dirname, "../dist")));

// Stripe Checkout route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Compliance Audits Toolkit Access",
              description: "Premium documents for compliance professionals",
            },
            unit_amount: 500, // $5.00
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Fallback for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
