<div align="center"> 
   
## CareConnect 
## Real-Time Hospital Bed & Blood Tracker
CareConnect is a decentralized, high-concurrency real-time management system designed to track hospital bed availability and blood bank inventories. Leveraging automated state polling and secure role-based access control, the system refreshes every 2 minutes — ensuring emergency responders, medical staff, and patients always have access to life-saving inventory data without delay.

</div>
   
## 🎯 Overview

CareConnect is a comprehensive platform that enables hospitals, blood banks, emergency responders, and patients to quickly access critical healthcare resources during emergencies. The application provides real-time visibility into:

- **Hospital Bed Availability** - Track ICU, general ward, and specialized beds in real-time
- **Blood Bank Inventory** - Monitor blood type availability and stock levels
- **Emergency Response** - Facilitate rapid resource allocation during crises
- **Patient Access** - Enable patients to find available resources quickly

## ✨ Key Features

- **Real-Time Dashboard** - Live updates of bed availability and blood inventory
- **Advanced Search & Filtering** - Find resources by hospital, location, blood type
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **User Authentication** - Secure login for different user roles (admin, hospital, patient)
- **Resource Management** - Update and manage hospital resources in real-time
- **Emergency Alerts** - Get notified of critical resource shortages
- **Data Visualization** - Charts and analytics for resource trends
- **High Performance** - Optimized for fast load times and smooth interactions

## 🛠 Tech Stack

### Frontend
- **Framework**: [React 19.2.0](https://react.dev/) - UI library
- **Routing**: [@tanstack/react-router](https://tanstack.com/router/) - Type-safe routing
- **State Management**: [@tanstack/react-query](https://tanstack.com/query/) - Server state management
- **Styling**: [Tailwind CSS 4.2.1](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Performant form handling
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Language**: [TypeScript 5.8.3](https://www.typescriptlang.org/) - Type-safe development

### Backend & Deployment
- **Server Framework**: [TanStack Start](https://tanstack.com/start/) - Full-stack React framework
- **Deployment**: [Vercel](https://vercel.com/) - Edge-optimized deployment
- **Build Tool**: [Vite](https://vitejs.dev/) - Next-generation build tool
- **Database**: PostgreSQL (via connection string)
- **Runtime**: Node.js with ESM support

### Development Tools
- **Linting**: [ESLint 9.32.0](https://eslint.org/)
- **Code Formatting**: [Prettier 3.7.3](https://prettier.io/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Build Configuration**: [TanStack Router Plugin](https://tanstack.com/router/)

## 🚀 Quick Start

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

## 🖥 Development

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint checks
- `bun run format` - Format code with Prettier

### Development Workflow

1. Create feature branches for new features
2. Make your changes and test thoroughly
3. Run linting and formatting before committing
4. Submit pull requests with clear descriptions

## 🚢 Deployment

### Vercel Deployment (Recommended)

The application is configured for automatic deployment on Vercel:

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Enable automatic deployments** on push to main
4. **View deployments** at [Vercel Dashboard](https://vercel.com)

**Current Deployment**: [care-connect-neon.vercel.app](https://care-connect-neon.vercel.app/)

### Configuration Files
- `vercel.json` - Vercel deployment settings
- `api/ssr.ts` - Server-side rendering for Vercel Functions

### Build Output
- Static assets: `public/`
- Server files: `dist/`
- Deployment handled by Vercel automatically

## 📋 Usage

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

## 🔐 Authentication

- User-based authentication for patients
- Admin authentication for hospital staff
- Secure session management
- Role-based access control

## 📊 Features in Detail

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

## 🐛 Troubleshooting

### Build Issues
- Clear cache: `rm -rf .next node_modules`
- Reinstall dependencies: `bun install`
- Check Node version: `node --version`

### Deployment Issues
- Check Vercel logs in dashboard
- Verify environment variables
- Review `vercel.json` configuration
- Check browser console for errors

### Development Issues
- Ensure port 5173 is available
- Check TypeScript errors: `bun run type-check`
- Review console logs for errors

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use meaningful variable names
- Add comments for complex logic
- Test thoroughly before submitting

## 📧 Support & Contact

- **GitHub Issues**: [Report bugs](https://github.com/vaishnavipadala13/CareConnect/issues)
- **Email**: [vaishnavipadala13@gmail.com](mailto:vaishnavipadala13@gmail.com)
- **Portfolio**: [Vaishnavi Padala](https://github.com/vaishnavipadala13)

## 🙏 Acknowledgments

- Built with [TanStack](https://tanstack.com/) ecosystem
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Icons from [Lucide React](https://lucide.dev/)

## 📈 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Machine learning predictions
- [ ] Multi-language support
- [ ] Integration with hospital management systems
- [ ] Real-time notifications via push
- [ ] Telemedicine features
- [ ] Offline functionality


---

