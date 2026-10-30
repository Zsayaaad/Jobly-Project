# Jobly — Full-Stack MERN Job Tracking Application

A production-ready job tracking platform built with the **MERN stack** (MongoDB, Express, React, Node.js). Jobly enables users to manage their job applications with full CRUD operations, real-time search & filtering, analytics dashboards, and secure JWT authentication — all wrapped in a brutalist-inspired UI with dark mode support.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=react-query&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)

---

## ✨ Features

### Authentication & Security
- JWT-based authentication with HTTP-only cookies
- Role-based access control (User / Admin)
- Demo user login for exploring the app without registration
- Global 401 interceptor with automatic logout
- Helmet, rate limiting, and MongoDB sanitization

### Job Management
- Full CRUD operations for job applications (Add, View, Edit, Delete)
- Confirmation modals for destructive actions
- Job status tracking (Pending, Interview, Declined, Closed)
- Job type classification (Full-Time, Part-Time, Internship, Remote)

### Search, Filter & Pagination
- Real-time search by position and company
- Filtering by job status and type
- Sorting (Newest, Oldest, A-Z, Z-A)
- Debounced search input for performance
- Paginated results with navigation controls

### Analytics & Dashboard
- Interactive job statistics with aggregation pipelines
- Admin dashboard with application-wide analytics
- Sidebar navigation with collapsible layout

### User Profile
- Profile management with avatar upload (Multer + Cloudinary)
- Image preview before upload
- Input validation with character length constraints

### UI/UX
- Brutalist-inspired design system
- Dark / Light theme toggle
- Responsive mobile navigation with slide-out sidebar
- Custom terminal-themed loading component
- Styled error pages (404 / 500)

---

## 🏗️ Architecture

```
Jobly/
├── server.js                    # Express entry point
├── controllers/                 # Route handlers (auth, job, user)
├── middleware/                   # Auth, validation, error handling, multer
├── models/                      # Mongoose schemas (Job, User)
├── routes/                      # Express routers
├── errors/                      # Custom error classes
├── utils/                       # JWT, password hashing, constants, cron
│
└── client/                      # React SPA (Vite)
    └── src/
        ├── App.jsx              # Router config (createBrowserRouter)
        ├── pages/               # Route modules with co-located loaders/actions
        │   ├── Landing.jsx
        │   ├── Login/           # Login.jsx + action.js
        │   ├── Register/        # Register.jsx + action.js
        │   ├── Dashboard/       # DashboardLayout.jsx + loader.js + queries.js
        │   ├── AddJob/          # AddJob.jsx + action.js
        │   ├── AllJobs/         # AllJobs.jsx + loader.js + queries.js
        │   ├── EditJob/         # EditJob.jsx + loader.js + action.js + queries.js
        │   ├── DeleteJob/       # action.js
        │   ├── Stats/           # Stats.jsx + loader.js + queries.js
        │   ├── Profile/         # Profile.jsx + action.js
        │   ├── Admin/           # Admin.jsx + loader.js
        │   └── Error.jsx        # Global error page (404/500)
        ├── components/          # Reusable UI components
        ├── context/             # React context providers
        └── utils/               # Axios instance, nav links
```

---

## 🚀 Shipped 16 Features Through Reviewed GitHub Pull Requests

All features below were shipped via code-reviewed PRs on GitHub:

### PR #1 — TanStack Query Migration ([`feat/tanstack-query`](https://github.com/Zsayaaad/mern-jobs/pull/1))
| # | Feature |
|---|---------|
| 1 | Migrated dashboard user data fetching to TanStack Query |
| 2 | Migrated stats data fetching with `ensureQueryData` |
| 3 | Migrated job listing data management with cache invalidation |
| 4 | Migrated edit job loader to TanStack Query |
| 5 | Created `ErrorElement` component for inline route error boundaries |
| 6 | Built custom terminal-themed `Loading` component with inline mode |
| 7 | Implemented global 401 response interceptor for auto-logout |
| 8 | Added Helmet and rate limiting for API security |

### PR #2 — UX Improvements & Validation ([`improvement/fix-issues`](https://github.com/Zsayaaad/mern-jobs/pull/2))
| # | Feature |
|---|---------|
| 1 | Implemented responsive mobile navigation bar with slide-out menu |
| 2 | Refactored ThemeToggle layout for responsive action group |
| 3 | Added character length constraints to input validations |
| 4 | Restricted job status "Closed" to updates only |
| 5 | Added confirmation modal to delete job action |
| 6 | Fixed delete job routing and adjusted layout padding |
| 7 | Added image preview functionality for profile avatar upload |
| 8 | Updated navbar navigation links |

---

## 🔄 Loading & Error States Across 7 Dashboard Pages

Built a layered loading and error handling architecture using React Router v7's `createBrowserRouter`:

### Loading States
The `DashboardLayout` detects route transitions via `useNavigation().state === "loading"` and renders a custom terminal-themed `<Loading inline />` component for **all 6 child routes**: Add Job, Stats, All Jobs, Profile, Admin, and Edit Job. The dashboard route itself uses `HydrateFallback: Loading` for initial hydration.

```jsx
// DashboardLayout.jsx — Centralized loading for all dashboard pages
const navigation = useNavigation();
const isPageLoading = navigation.state === "loading";

{isPageLoading ? <Loading inline /> : <Outlet context={{ user }} />}
```

### Error Boundaries
| Route | Error Handler | Scope |
|-------|--------------|-------|
| `/` (root) | `<Error />` | Global catch-all — styled 404/500 page |
| `/dashboard/stats` | `<ErrorElement />` | Inline error boundary for stats |
| `/dashboard/allJobs` | `<ErrorElement />` | Inline error boundary for job listing |

### Form Submission States
The reusable `<SubmitButton />` component uses `useNavigation().state === "submitting"` to show loading feedback on **5 pages**: Register, Login, Add Job, Edit Job, and Profile.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, React Router v7 (library mode), TanStack Query v5, Tailwind CSS v4 |
| **Backend** | Node.js, Express 5, Mongoose / MongoDB |
| **Auth** | JWT with HTTP-only cookies, bcryptjs |
| **File Upload** | Multer + Cloudinary |
| **Security** | Helmet, express-rate-limit, express-mongo-sanitize |
| **Validation** | express-validator |
| **Build** | Vite 8 |
| **Deployment** | Docker (multi-stage build with health check + cron keep-alive) |

---

## ⚡ Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB instance (local or Atlas)
- Cloudinary account (for avatar uploads)

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5100
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Development

```bash
# Install dependencies (root + client)
npm run build

# Run both server and client concurrently
npm run dev
```

The server runs on `http://localhost:5100` and the client on `http://localhost:5173`.

### Docker

```bash
docker build -t jobly .
docker run -p 5100:5100 --env-file .env jobly
```

### Seed Database

```bash
node seedingDataIntoDB.js
```

---

## 📄 License

ISC

