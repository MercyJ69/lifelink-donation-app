import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// CORS configuration for deployment
const allowedOrigins = [
  "http://localhost:3000", // Development
  process.env.FRONTEND_URL, // Production frontend URL (set this env var)
  "https://*.netlify.app" // Allow all Netlify domains
];

// If no specific FRONTEND_URL is set, allow common origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow all localhost for development
    if (origin.includes('localhost')) return callback(null, true);

    // Check against allowed origins
    const isAllowed = allowedOrigins.some(allowed => {
      if (allowed.startsWith("*.")) {
        const domain = allowed.slice(2); // Remove "*."
        return origin.endsWith(domain);
      }
      return origin === allowed;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// DATABASE CONNECTION
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("✅ Backend is Running Successfully!");
});

// TEST DB CONNECTION
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "✅ Database Connected", time: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Database Connection Error", error });
  }
});

// DONOR REGISTRATION ENDPOINT
app.post("/api/donors/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    dateOfBirth,
    bloodType,
    gender,
    address,
    emergencyContact,
    medicalHistory,
    donationPreferences,
    isOrganDonor,
    isTissueDonor,
    isFluidDonor
  } = req.body;

  try {
    const query = `
      INSERT INTO donors (
        first_name, last_name, email, password_hash, phone, date_of_birth,
        blood_type, gender, address, emergency_contact, medical_history,
        donation_preferences, is_organ_donor, is_tissue_donor, is_fluid_donor
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING id, first_name, last_name, email
    `;

    const values = [
      firstName,
      lastName,
      email,
      password, // In real app, hash this with bcrypt
      phone,
      dateOfBirth,
      bloodType,
      gender,
      address,
      emergencyContact,
      medicalHistory,
      donationPreferences, // JSONB object with organs, tissues, fluids
      isOrganDonor || false,
      isTissueDonor || false,
      isFluidDonor || false
    ];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "✅ Donor registered successfully!",
      donor: result.rows[0]
    });

  } catch (error) {
    console.error("Error registering donor:", error);

    if (error.code === '23505') { // Unique constraint violation (duplicate email)
      return res.status(400).json({ message: "❌ Email already registered" });
    }

    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// DONOR LOGIN ENDPOINT
app.post("/api/donors/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT id, first_name, last_name, email, password_hash FROM donors WHERE email = $1";
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "❌ Invalid email or password" });
    }

    const donor = result.rows[0];

    // In real app, use bcrypt to compare hashed password
    if (password !== donor.password_hash) { // Simplified for demo
      return res.status(401).json({ message: "❌ Invalid email or password" });
    }

    res.json({
      message: "✅ Login successful",
      donor: {
        id: donor.id,
        firstName: donor.first_name,
        lastName: donor.last_name,
        email: donor.email
      }
    });

  } catch (error) {
    console.error("Error logging in donor:", error);
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// ADMIN LOGIN ENDPOINT
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // Simple admin authentication (replace with proper authentication system)
  const ADMIN_EMAIL = "admin@lifelink.com";
  const ADMIN_PASSWORD = "admin123"; // Change this in production!

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.json({
      message: "✅ Admin login successful",
      admin: {
        email: ADMIN_EMAIL,
        role: "admin"
      }
    });
  } else {
    res.status(401).json({ message: "❌ Invalid admin credentials" });
  }
});

// ADMIN GET ALL DONORS ENDPOINT
app.get("/api/admin/donors", async (req, res) => {
  try {
    // Basic admin check via header or query param for simplicity
    // In production, use proper JWT authentication
    const adminEmail = req.headers['x-admin-email'];
    if (!adminEmail || adminEmail !== "admin@lifelink.com") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const query = `
      SELECT
        id,
        first_name,
        last_name,
        email,
        phone,
        date_of_birth,
        blood_type,
        gender,
        created_at,
        donation_preferences,
        is_organ_donor,
        is_tissue_donor,
        is_fluid_donor
      FROM donors
      ORDER BY created_at DESC
    `;

    const result = await pool.query(query);
    res.json({
      message: "✅ Donor records retrieved successfully",
      donors: result.rows
    });

  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// ADMIN DELETE DONOR ENDPOINT
app.delete("/api/admin/donors/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Basic admin check via header
    const adminEmail = req.headers['x-admin-email'];
    if (!adminEmail || adminEmail !== "admin@lifelink.com") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const query = "DELETE FROM donors WHERE id = $1 RETURNING id, first_name, last_name, email";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "❌ Donor not found" });
    }

    res.json({
      message: "✅ Donor record deleted successfully",
      deletedDonor: result.rows[0]
    });

  } catch (error) {
    console.error("Error deleting donor:", error);
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// RUN SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});
