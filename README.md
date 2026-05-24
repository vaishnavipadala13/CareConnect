# 🏥 CareConnect - Real-Time Hospital Bed & Blood Tracker

CareConnect is a decentralized, high-concurrency real-time management system designed to track hospital bed spaces and blood bank inventories. By leveraging automated state polling and secure role-based access control, the system provides updates every 2 minutes, ensuring that emergency responders, medical staff, and patients have access to life-saving inventory metrics without delay.

> **Built with:** React 18.2, TypeScript 5.3, Vite 5.4, Node.js/Express, MongoDB, and TailwindCSS.

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **🔐 Dual Role Authentication** | Separate secure portals and dedicated dashboard view layouts for **Users (Patients/Responders)** and **Admins (Hospital Staff)**. |
| **⏳ 2-Minute Auto-Refresh** | Core dashboards force-refresh inventory state every 120 seconds using an optimized background polling mechanism. |
| **🛏️ Real-Time Bed Allocation** | Granular categorization and live tracking of occupancy metrics across **ICU**, **General Wards**, and specialized units. |
| **🩸 Blood Bank Management** | Exhaustive asset ledger monitoring availability across all major blood groups ($A+$, $A-$, $B+$, $B-$, $AB+$, $AB-$, $O+$, $O-$). |
| **⚠️ Expiry & Volume Alerts** | Precise tracking of individual unit volumes (in ML/Units) coupled with chronological expiry warnings to eliminate hazardous usage. |

---

## 🏗️ Architecture
┌─────────────────────────────────────────────────────────────┐
│                     LifeSync Frontend                       │
│               (React + TypeScript + Vite)                  │
├───────────────┬──────────────────────────────┬──────────────┤
│  User Portal  │     Inventory Dashboard      │ Admin Portal │
│ (Public View) │  (2-Min Aggregated Polling)  │ (Restricted) │
└───────────────┴──────────────┬───────────────┴──────────────┘
│
Axios Requests  │  REST API Calls
▼
┌─────────────────────────────────────────────────────────────┐
│                     LifeSync Backend                        │
│                   (Node.js + Express )                    │
├──────────────────────────────┬──────────────────────────────┤
│      Auth Middleware         │    Inventory Controller      │
└───────────────┬──────────────┴───────────────┬──────────────┘
│                              │
│ Mongoose Queries             │
▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Layer                           │
│                     (MongoDB Atlas)                         │
└─────────────────────────────────────────────────────────────┘


## 📁 Project Structure

LifeSync/
├── frontend/                       # React + TypeScript Frontend
│   ├── index.html                  # Entry HTML
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.ts              # Vite bundle configuration
│   └── src/
│       ├── main.tsx                # Client entry point
│       ├── App.tsx                 # Root router and layout shell
│       ├── components/
│       │   ├── BedStatusCard.tsx   # Visual status indicator for ICU/General beds
│       │   ├── BloodGroupRow.tsx   # Inventory display with volumes & expiry trackers
│       │   ├── CountdownTimer.tsx  # Interactive countdown visual for the 2-min refresh
│       │   └── Navbar.tsx          # Dynamic navigation with role sign-outs
│       ├── pages/
│       │   ├── UserLogin.tsx       # Authentication interface for public users
│       │   ├── AdminLogin.tsx      # Secured gateway for medical supervisors
│       │   ├── UserDashboard.tsx   # Read-only live inventory tracking
│       │   └── AdminDashboard.tsx  # CRUD management layout for beds & blood units
│       ├── hooks/
│       │   └── useAutoRefresh.ts   # Custom tab polling hook (120-second interval)
│       └── utils/
│           └── dateHelpers.ts      # Validates blood shelf-life and shelf expiry flags
│
└── backend/                        # Node.js API Environment
├── server.ts                   # Application server bootstrap
├── package.json                # API dependencies
├── middleware/
│   └── authHandler.ts          # Validates JWT tokens and maps roles (User vs Admin)
├── models/
│   ├── Bed.ts                  # Schema definitions (ICU, General, Pediatric)
│   └── BloodStock.ts           # Schema definitions (Group, Units, Expiry, Batch)
└── routes/
├── auth.routes.ts          # Registration and validation endpoints
└── inventory.routes.ts     # Protected allocation and adjustments endpoints


## 🚀 Getting Started

### Prerequisites
* **Node.js** $\ge$ 18.x
* **MongoDB** instance (Local or Atlas Cloud URI)
* Npm / Yarn package manager

### 1. Clone the Repository
```bash
git clone [https://github.com/vaishnavipadala13/CareConnect.git](https://vaishnavipadala13/CareConnect.git)
cd CareConnect
2. Set Up Environment Variables
Create a .env file in the backend/ directory:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret_key
3. Install & Run Backend Server
cd backend
npm install
npm run dev
4. Install & Run Frontend Client
cd ../frontend
npm install
npm run dev
Open http://localhost:8080/ in your browser to view the interface.


⚙️ How It Works
Live Sync State Lifecycle
[User loads Dashboard] 
         │
         ▼
[Fetch active state from MongoDB] ──► [Populate Bed & Blood Tables]
         │                                      │
         ├──────────────────────────────────────┘
         ▼
[Launch 2-Minute Web Workers/Intervals]
         │
         ▼ (Timer elapses / 120s)


Roles and Permissions MatrixEntity FocusUser / Responder AccessAdmin / Staff AccessICU / General Bed Metrics👁️ View Only⚙️ Full Modification (CRUD)Blood Units Status👁️ View Only⚙️ Full Modification (CRUD)Expiry Flag Adjustments🚫 Restricted⚙️ Full Modification (CRUD)
🛡️ Security & Privacy
Secure Session Handling: Admin pathways are fully protected using industry-standard HTTP-Only JSON Web Tokens (JWT).
Payload Sanitation: API parameters undergo structural type checking via TypeScript interfaces to avoid database schema contamination.
Client-Safe Serialization: User views omit explicit hospital batch identification strings to prioritize operational safety.
.

🗺️ Roadmap
[ ] SMS Integration: Automated alerts text regional blood donors when specific blood groups run below critical capacity limits.

[ ] Predictive Analysis: Machine Learning engine gauges seasonal bed demand using historical admission metrics.

[ ] Geofencing: Dynamic mapping sorting available hospitals by physical distance relative to active paramedics.

[ ] HL7 FHIR Protocols: Interoperability compliance integration for external health network data exchanges.



👤 Author
Your Name

GitHub: vaishnavipadala13

Email: vaishnavipadala13@gmail.com

License

This project is developed for educational, healthcare, and hackathon purposes.
