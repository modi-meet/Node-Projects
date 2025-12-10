Project: Blogify (Node.js + Express)

Overview
- A simple, production-ready blogging application demonstrating user authentication, image uploads, and CRUD operations for blog posts. The app uses server-rendered EJS templates for the frontend and MongoDB/Mongoose for persistence.

 Summary
- **Role demonstrated:** Backend developer with full-stack awareness — authentication, data modeling, server-side rendering, and deployment.
- **Key strengths:** Secure user authentication using JWTs, clean route/controller separation, image upload handling, and pragmatic error handling.
- **What to look for in the code:** modular controllers (in `controllers/`), route organization (`routes/`), JWT auth (in `services/auth.js`), and Mongoose models (`models/`).

Tech Stack
- Node.js + Express
- EJS templating for server-rendered views
- MongoDB with Mongoose
- JWT for authentication (`jsonwebtoken`)
- File uploads handled with `multer`

Notable Features
- Signup / Signin with JWT-based session cookie
- Create, read, and list blog posts with optional image upload
- Middleware for auth-checks and role-aware rendering
- Small, focused codebase designed for clarity and easy extension

How this project demonstrates production readiness
- Environment-driven configuration: All secrets and connection strings are provided through environment variables (see `.env.example`).
- Fail-fast behavior: App exits on missing critical secrets or DB connectivity failure to avoid insecure defaults.
- Uploads ignored in source control: Uploaded assets are placed under `public/uploads` and are included in `.gitignore` to avoid committing user data.
- Token expiration and hardened token handling: JWTs are issued with expiry and verified on each request.

Run Locally
- Prerequisites: Node.js, npm, and a running MongoDB instance.
- Install and run:
  - `npm install`
  - Create a `.env` from `.env.example` and set `MONGO_URI` and `JWT_SECRET`.
  - `npm run dev` (development with nodemon) or `npm start` (production)

Deployment
- Live deployment: This application is deployed on AWS. Visit the live demo at: http://blogify-env.eba-dywm8aej.ap-south-1.elasticbeanstalk.com/