🏥 CareConnect - Real-Time Hospital Bed & Blood Tracker

LifeSync is a decentralized, high-concurrency real-time management system designed to track hospital bed spaces and blood bank inventories. By leveraging automated state polling and secure role-based access control, the system provides updates every 2 minutes, ensuring that emergency responders, medical staff, and patients have access to life-saving inventory metrics without delay.

> Built with: React 18.2, TypeScript 5.3, Vite 5.4, Node.js/Express, MongoDB, and TailwindCSS.

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
