# 🏥 CareConnect
# Real-Time Hospital Bed & Blood Tracker

CareConnect is a decentralized, high-concurrency real-time management system designed to track hospital bed availability and blood bank inventories. Leveraging automated state polling and secure role-based access control, the system refreshes every 2 minutes — ensuring emergency responders, medical staff, and patients always have access to life-saving inventory data without delay.

> **Built with:** React 18.2 · TypeScript 5.3 · Vite 5.4 · Node.js/Express · MongoDB · TailwindCSS

---

## ✨ Features

| Feature | Description |
|:---|:---|
| 🔐 **Dual Role Authentication** | Separate secure portals and dedicated dashboard layouts for **Users (Patients/Responders)** and **Admins (Hospital Staff)**. |
| ⏳ **2-Minute Auto-Refresh** | Core dashboards force-refresh inventory state every 120 seconds via an optimized background polling mechanism. |
| 🛏️ **Real-Time Bed Allocation** | Granular categorization and live occupancy tracking across **ICU**, **General Wards**, and specialized units. |
| 🩸 **Blood Bank Management** | Exhaustive inventory monitoring across all major blood groups: `A+` `A-` `B+` `B-` `AB+` `AB-` `O+` `O-`. |
| ⚠️ **Expiry & Volume Alerts** | Precise tracking of unit volumes (ML/Units) with chronological expiry warnings to prevent hazardous usage. |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       CareConnect Frontend                      │
│                  (React + TypeScript + Vite)                    │
├─────────────────┬───────────────────────────┬───────────────────┤
│   User Portal   │    Inventory Dashboard    │   Admin Portal    │
│  (Public View)  │  (2-Min Polling Engine)   │   (Restricted)    │
└─────────────────┴──────────────┬────────────┴───────────────────┘
                                 │  Axios / REST API Calls
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                       CareConnect Backend                       │
│                      (Node.js + Express)                        │
├──────────────────────────────┬──────────────────────────────────┤
│      Auth Middleware         │      Inventory Controller        │
└──────────────┬───────────────┴────────────────┬─────────────────┘
               │  Mongoose Queries              │
               ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Database Layer                          │
│                        (MongoDB Atlas)                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
CareConnect/
├── frontend/                         # React + TypeScript Frontend
│   ├── index.html                    # Entry HTML
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.ts                # Vite bundle configuration
│   └── src/
│       ├── main.tsx                  # Client entry point
│       ├── App.tsx                   # Root router and layout shell
│       ├── components/
│       │   ├── BedStatusCard.tsx     # Visual status indicator for ICU/General beds
│       │   ├── BloodGroupRow.tsx     # Inventory display with volumes & expiry trackers
│       │   ├── CountdownTimer.tsx    # Interactive countdown for the 2-min refresh cycle
│       │   └── Navbar.tsx            # Dynamic navigation with role-based sign-out
│       ├── pages/
│       │   ├── UserLogin.tsx         # Authentication interface for public users
│       │   ├── AdminLogin.tsx        # Secured gateway for medical supervisors
│       │   ├── UserDashboard.tsx     # Read-only live inventory tracking view
│       │   └── AdminDashboard.tsx    # CRUD management layout for beds & blood units
│       ├── hooks/
│       │   └── useAutoRefresh.ts     # Custom polling hook (120-second interval)
│       └── utils/
│           └── dateHelpers.ts        # Blood shelf-life validation and expiry flag logic
│
└── backend/                          # Node.js API Environment
    ├── server.ts                     # Application server bootstrap
    ├── package.json                  # API dependencies
    ├── middleware/
    │   └── authHandler.ts            # JWT validation and role mapping (User vs Admin)
    ├── models/
    │   ├── Bed.ts                    # Schema: ICU, General, Pediatric bed types
    │   └── BloodStock.ts             # Schema: Group, Units, Expiry, Batch tracking
    └── routes/
        ├── auth.routes.ts            # Registration and login endpoints
        └── inventory.routes.ts       # Protected allocation and adjustment endpoints
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **MongoDB** instance (Local or Atlas Cloud URI)
- npm or Yarn package manager

### 1. Clone the Repository

```bash
git clone https://github.com/vaishnavipadala13/CareConnect.git
cd CareConnect
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret_key
```

### 3. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```

### 4. Start the Frontend Client

```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser to view the interface.

---

## ⚙️ How It Works

### Live Sync State Lifecycle

```
[User loads Dashboard]
         │
         ▼
[Fetch active state from MongoDB] ──► [Populate Bed & Blood Tables]
         │                                        │
         └──────────────────────────────────────┘
         │
         ▼
[Launch 2-Minute Polling Interval]
         │
         ▼  (120 seconds elapse)
[Re-fetch and refresh UI state] ──► [Repeat]
```

### Roles & Permissions Matrix

| Entity Focus | 👤 User / Responder | 🔧 Admin / Staff |
|:---|:---:|:---:|
| ICU / General Bed Metrics | 👁️ View Only | ⚙️ Full CRUD |
| Blood Units Status | 👁️ View Only | ⚙️ Full CRUD |
| Expiry Flag Adjustments | 🚫 Restricted | ⚙️ Full CRUD |

---

## 🛡️ Security & Privacy

- **Secure Session Handling** — Admin routes are fully protected using HTTP-Only JSON Web Tokens (JWT).
- **Payload Sanitation** — API parameters undergo structural type checking via TypeScript interfaces to prevent schema contamination.
- **Client-Safe Serialization** — User-facing views omit hospital batch identification strings to preserve operational safety.

---

## 🗺️ Roadmap

- [ ] **SMS Alerts** — Automated donor notifications when specific blood groups fall below critical thresholds.
- [ ] **Predictive Analysis** — ML engine forecasting seasonal bed demand from historical admission patterns.
- [ ] **Geofencing** — Dynamic map sorting available hospitals by proximity to active paramedics.
- [ ] **HL7 FHIR Compliance** — Interoperability integration for external health network data exchange.

---

## 👤 Author

**Vaishnavi Padala**

- GitHub: [@vaishnavipadala13](https://github.com/vaishnavipadala13)
- Email: [vaishnavipadala13@gmail.com](mailto:vaishnavipadala13@gmail.com)

---

## License

This project is licensed under the [MIT License](LICENSE).
