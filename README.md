# Node.js Projects Collection

A portfolio of Node.js projects demonstrating progressive learning from fundamentals to full-stack web development with authentication, database integration, and server-side rendering.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [Hello World](#hello-world)
  - [Project 01 - Hybrid Node Server](#project-01---hybrid-node-server)
  - [Project 04 - URL Shortener with JWT Auth](#project-04---url-shortener-with-jwt-auth)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Key Learnings](#key-learnings)
- [RESTful API Guidelines](#restful-api-guidelines)

## Overview

This repository showcases a learning journey through Node.js development, progressing from basic concepts to a production-ready URL shortening service with user authentication. Each project builds upon the previous one, demonstrating mastery of increasingly complex topics.

## Projects

### Hello World

A minimal Node.js application demonstrating core concepts.

**Features:**
- Basic Node.js setup with npm
- Using built-in `os` module to access system information

**Run:**
```bash
cd Hello-World
npm install
npm start
```

---

### Project 01 - Hybrid Node Server

A RESTful API server demonstrating best practices for building hybrid applications that serve both web browsers and API clients.

**Features:**
- Hybrid server architecture (SSR for browsers, JSON for APIs)
- Express.js middleware implementation
- MongoDB integration with Mongoose ODM
- MVC (Model-View-Controller) pattern
- Request logging middleware

**Tech Stack:**
- Node.js, Express.js
- MongoDB, Mongoose
- dotenv for environment configuration

**Run:**
```bash
cd proj01
npm install
# Create .env file with MONGODB_URL
npm start
```

**API Endpoints:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PATCH | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

---

### Project 04 - URL Shortener with JWT Auth

A full-featured URL shortening service with user authentication and click analytics.

🔗 **Live Demo:** [url-shotener-advanced.onrender.com](https://url-shotener-advanced.onrender.com/login)

**Features:**
- URL shortening with custom short IDs
- Instant redirection to original URLs
- Click analytics and visit tracking
- User signup/login with JWT authentication
- Role-based access control (NORMAL, ADMIN)
- Rate limiting for API protection
- Server-side rendering with EJS templates
- Auto-expiring URLs (TTL: 24 hours)

**Tech Stack:**
- Node.js, Express.js
- MongoDB with Mongoose
- JWT for stateless authentication
- EJS templating engine
- cookie-parser, express-validator
- nanoid/uuid for short ID generation

**Run:**
```bash
cd proj04
npm install
# Create .env file with MONGODB_URL and JWT_SECRET
npm start
```

**API Endpoints:**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/url` | Create shortened URL | Required |
| GET | `/url/:shortId` | Redirect to original URL | - |
| GET | `/analytics/:shortId` | Get click analytics | Required |
| POST | `/user/signup` | Register new user | - |
| POST | `/user/login` | User login | - |

**Project Structure:**
```
proj04/
├── index.js           # App entry point
├── connection.js      # MongoDB connection
├── controller/        # Request handlers
├── models/            # Mongoose schemas
├── routes/            # API routes
├── middlewares/       # Auth & rate limiting
├── service/           # Business logic
└── views/             # EJS templates
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web application framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JWT | Stateless authentication |
| EJS | Server-side templating |
| dotenv | Environment configuration |

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/modi-meet/Node-Projects.git
cd Node-Projects
```

2. Navigate to a project and install dependencies:
```bash
cd proj04  # or any other project
npm install
```

3. Create a `.env` file with required variables:
```env
MONGODB_URL=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
PORT=8001
```

4. Start the server:
```bash
npm start
```

## Key Learnings

### Concepts Covered
- **Node.js Fundamentals** - Event loop, modules, npm
- **Express.js** - Routing, middleware, error handling
- **MongoDB/Mongoose** - Schema design, CRUD operations, indexing
- **Authentication** - JWT tokens, cookies, stateless auth
- **Security** - Rate limiting, input validation, role-based access
- **Architecture** - MVC pattern, RESTful API design, hybrid servers
- **SSR** - Server-side rendering with EJS templates

## RESTful API Guidelines

See [REST-Rules.md](./REST-Rules.md) for detailed RESTful API best practices followed in these projects.

**Key Principles:**
1. Use proper HTTP methods (GET, POST, PATCH, PUT, DELETE)
2. Design hybrid servers:
   - `/users` → Render HTML (SSR) for browsers
   - `/api/users` → Return JSON for mobile/frontend apps

## Author

**Meet Modi**

---

⭐ If you found this helpful, please star this repository!

