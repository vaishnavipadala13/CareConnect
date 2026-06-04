<div align="center"> 
   
## CareConnect 
## Real-Time Hospital Bed & Blood Tracker
CareConnect is a decentralized, high-concurrency real-time management system designed to track hospital bed availability and blood bank inventories. Leveraging automated state polling and secure role-based access control, the system refreshes every 2 minutes — ensuring emergency responders, medical staff, and patients always have access to life-saving inventory data without delay.

</div>

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>
   
##  Overview

CareConnect is a comprehensive platform that enables hospitals, blood banks, emergency responders, and patients to quickly access critical healthcare resources during emergencies. The application provides real-time visibility into:

- **Hospital Bed Availability** - Track ICU, general ward, and specialized beds in real-time
- **Blood Bank Inventory**      - Monitor blood type availability and stock levels
- **Emergency Response**        - Facilitate rapid resource allocation during crises
- **Patient Access**            - Enable patients to find available resources quickly
  

 ##  Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│              CareConnect Frontend (React + TypeScript + Vite)       │
├───────────────────┬─────────────────────────────┬───────────────────┤
│   User Portal     │    Inventory Dashboard       │   Admin Portal    │
│  (Public View)    │   (2-Min Polling Engine)     │   (Restricted)    │
└───────────────────┴──────────────┬──────────────┴───────────────────┘
                                   │
                        Axios / REST API Calls
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│              CareConnect Backend (Node.js + Express)                │
├──────────────────────────────────┬──────────────────────────────────┤
│        Auth Middleware           │       Inventory Controller       │
└──────────────────┬───────────────┴──────────────────┬──────────────┘
                   │         Mongoose Queries          │
                   ▼                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Database Layer (MongoDB Atlas)                   │
└─────────────────────────────────────────────────────────────────────┘

```
## Key Features

- **Real-Time Dashboard**         - Live updates of bed availability and blood inventory
- **Advanced Search & Filtering** - Find resources by hospital, location, blood type
- **Responsive Design**           - Optimized for desktop, tablet, and mobile devices
- **User Authentication**         - Secure login for different user roles (admin, hospital, patient)
- **Resource Management**         - Update and manage hospital resources in real-time
- **Emergency Alerts**            - Get notified of critical resource shortages
- **Data Visualization**          - Charts and analytics for resource trends
- **High Performance**            - Optimized for fast load times and smooth interactions


``
##  Quick Start

### Prerequisites
- Node.js 18+ or [Bun 1.0+](https://bun.sh/)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaishnavipadala13/CareConnect.git
   cd CareConnect
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```
The app will be available at `http://localhost:5173`


## 📁 Project Structure

```
CareConnect/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── DashboardHeader.tsx
│   │   └── ui/              # Radix UI component library
│   ├── hooks/               # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── lib/                 # Utility functions & helpers
│   │   ├── auth.ts          # Authentication logic
│   │   ├── error-capture.ts # Error handling
│   │   ├── error-page.ts    # Error page rendering
│   │   ├── store.ts         # Global state
│   │   └── utils.ts         # Utility functions
│   ├── routes/              # Route definitions
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── login.tsx        # Login page
│   │   ├── admin.tsx        # Admin dashboard
│   │   ├── admin-login.tsx  # Admin login
│   │   └── dashboard.tsx    # User dashboard
│   ├── router.tsx           # Router configuration
│   ├── routeTree.gen.ts     # Auto-generated route tree
│   ├── server.ts            # Server entry point
│   ├── start.ts             # App initialization
│   └── styles.css           # Global styles
├── api/
│   └── ssr.ts               # Server-side rendering handler
├── hooks/
│   ├── package.json         # Hooks project config
│   ├── api/
│   │   └── ssr.js           # Alternative SSR handler
│   └── vercel.json          # Vercel configuration for hooks
├── scripts/
│   └── copy-vercel-assets.js # Build script
├── public/                  # Static assets
├── vercel.json              # Vercel deployment config
├── vite.config.ts           # Vite build config
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind CSS config
├── eslint.config.js         # ESLint config
├── package.json             # Project dependencies
└── README.md                # This file
```

##  Features in Detail

### Dashboard
- Real-time resource availability
- Search and filter capabilities
- Resource details and location mapping
- Booking and request features

### Admin Panel
- Resource management interface
- Inventory updates
- User management
- Analytics and reporting

### Emergency Features
- Priority alerts
- Quick resource lookup
- Emergency contact information
- Resource reservation system
- 
- ##  Authentication

- User-based authentication for patients
- Admin authentication for hospital staff
- Secure session management
- Role-based access control
- 
##  Usage

### For Patients
1. Navigate to the home page
2. Login with your credentials
3. Search for available hospital beds or blood types
4. View detailed resource information
5. Contact hospitals for resource booking

### For Hospital Administrators
1. Login to admin dashboard
2. Update bed availability in real-time
3. Manage blood bank inventory
4. View analytics and trends
5. Respond to emergency requests

### For Emergency Responders
1. Access emergency resource dashboard
2. Find nearest available resources
3. Get alerts for critical shortages
4. Coordinate resource allocation

 ##  Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Machine learning predictions
- [ ] Multi-language support
- [ ] Integration with hospital management systems
- [ ] Real-time notifications via push
- [ ] Telemedicine features
- [ ] Offline functionality


##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  Author

**Vaishnavi Padala**

- GitHub: [@vaishnavipadala13](https://github.com/vaishnavipadala13)
- Email: [vaishnavipadala13@gmail.com](mailto:vaishnavipadala13@gmail.com)


##  License

This project is licensed under the [MIT License](LICENSE).



---

