# Health Balance Hub 🌿

**Hi everyone!**  

This is a personalized version of the project I and my colleagues developed as the final project during our **Full-Stack Web Development** training at **DCI - Digital Career Institute, Berlin**. The devOps part of the project you will read about below is my personal skill I demonstrate. Otherwise te project was simply a fuillstack project that we collaborated on. 

Our team name was **Balanced Beings**, and our project is called **Health Balance Hub**.

---

## 📖 Project Overview

### 1️⃣ **Project Idea & Core Goals**

**Health Balance Hub** is a wellness platform focused on the **three pillars of a healthy lifestyle**:
- 🥗 **Nutrition**
- 💪 **Physical Fitness**
- 🧠 **Mental Health**

Our core goal is to help people build sustainable habits for a balanced life by offering expert-backed tips, simple workout plans, healthy meal ideas, and mental wellness resources — **all in one place**.

---

### 2️⃣ **Target Users & Key Features**

**Target Users:**
- Health-conscious individuals
- Beginners starting their fitness or wellness journey
- People seeking balance in physical and mental well-being

**Key Features:**
- 📝 **Informative Blogs** — Nutrition, fitness, and mental health content
- 🏋️ **Workout & Diet Plans** — Beginner-friendly routines
- 💡 **Wellness Tips** — Mental health support and guidance
- 📧 **Contact Form** — User inquiries and personalized guidance
- 🔐 **User Authentication** — Secure registration, login, and profile management
- 📱 **Responsive Design** — Seamless experience across all devices

---

### 3️⃣ **Tech Stack**

We built a **full-stack MERN application** using:

#### Frontend
- **React** (v18+) with **Vite**
- **React Router DOM** — Client-side routing
- **React Hooks** — State management (useState, useEffect, useContext)
- **Axios** — HTTP requests
- **CSS Modules** — Component-scoped styling
- **HTML5 & CSS3** — Semantic markup and modern styling

#### Backend
- **Node.js** (v18+)
- **Express.js** — RESTful API framework
- **MongoDB** — NoSQL database
- **Mongoose** — ODM with schema validation
- **JWT (jsonwebtoken)** — Stateless authentication
- **bcryptjs** — Password hashing
- **nodemailer** — Email service integration
- **Joi** — Input validation

#### Security & Middleware
- **helmet** — HTTP security headers
- **cors** — Cross-Origin Resource Sharing
- **cookie-parser** — Cookie parsing
- **morgan** — HTTP request logger
- **dotenv** — Environment variable management

#### DevOps & Deployment
- **Docker** & **Docker Compose** — Containerization
- **Oracle Cloud Free Tier** — Production hosting
- **Git & GitHub** — Version control
- **nodemon** — Development auto-restart

---

### 4️⃣ **Team Roles**

Our team followed **Agile Scrum methodology**:

- **Tech Lead (TL):** Saveen — Managing technical direction, architecture, and code quality
- **Scrum Master (SM):** Ifeoma — Facilitating sprint planning and ensuring team collaboration
- **Developers:** Chinedu & Okile — Full-stack development (frontend & backend)
- **Team Contributors:** All members participated in development, code reviews, and testing

---

### 5️⃣ **Sprint Plan Overview**

We completed the project in **6 weekly sprints**:

| Sprint | Focus Areas |
|--------|-------------|
| **Sprint 1** | Project setup, GitHub organization, team role assignment, backend skeleton, wireframes |
| **Sprint 2** | Landing page design, core UI components, backend basic setup (server, routes) |
| **Sprint 3** | Static content pages (Nutrition, Fitness, Mental Health), frontend-backend connection |
| **Sprint 4** | Dynamic content and blogs, contact form with backend integration |
| **Sprint 5** | UI enhancements, mobile responsiveness, user experience refinement, testing |
| **Sprint 6** | Final bug fixing, deployment preparation, presentation and demo |

---

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **MongoDB** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account)
- **npm** or **yarn** package manager
- **Git** for version control

---

## ⚙️ Installation & Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ebosterix/Health-Balance-Hub.git
cd Health-Balance-Hub
```

---

### 2️⃣ Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
nano .env
```

**Create `backend/.env` with these variables:**

```env
NODE_ENV=development
PORT=5001

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/health-hub
# For MongoDB Atlas, use:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/health-hub?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long
JWT_EXPIRE=30d
JWT_REFRESH_SECRET=your_super_secret_refresh_key_minimum_32_characters_long

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# Frontend URL
CLIENT_URL=http://localhost:5173
```

**💡 Tip:** For Gmail, generate an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

**Start the backend server:**

```bash
npm run dev
```

✅ Backend runs at `http://localhost:5001`

---

### 3️⃣ Frontend Setup

**Open a new terminal:**

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
nano .env.local
```

**Create `frontend/.env.local`:**

```env
VITE_API_URL=http://localhost:5001/api
```

**Start the frontend development server:**

```bash
npm run dev
```

✅ Frontend runs at `http://localhost:5173`

---

### 4️⃣ Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5001/api

---

## 🐳 Docker Deployment (Production)

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

---

### Deployment Steps

#### 1️⃣ Create Production Environment File

```bash
# In project root directory
nano .env.production
```

**Add production environment variables:**

```env
NODE_ENV=production

# Production MongoDB (MongoDB Atlas recommended)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/health-hub?retryWrites=true&w=majority

# Strong production secrets
JWT_SECRET=your_production_jwt_secret_min_64_chars_recommended
JWT_EXPIRE=30d
JWT_REFRESH_SECRET=your_production_refresh_secret_min_64_chars_recommended

# Production email settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASSWORD=your-production-app-password

# Production URL
CLIENT_URL=http://your-domain.com
```

⚠️ **Security Note:** Never commit `.env.production` to Git! As a developer you will always here this a lot so it's a must-good practice. 

---

#### 2️⃣ Build & Start Containers

```bash
# Build Docker images
docker-compose build

# Start containers
docker-compose --env-file .env.production up -d

# Check running containers
docker ps

# View logs
docker-compose logs -f
```

---

#### 3️⃣ Access Application

- **Frontend:** http://localhost (port 80)
- **Backend API:** http://localhost:5001

---

#### 4️⃣ Stop Containers

```bash
docker-compose down
```

---

## 📁 Project Structure

```
Health-Balance-Hub/
├── backend/
│   ├── config/              # Database & environment configs
│   ├── controllers/         # Route controllers (business logic)
│   ├── middleware/          # Auth, error handling, validators
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routes
│   ├── utils/               # Helper functions
│   ├── server.js            # Express app entry point
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context API
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Helper functions
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .dockerignore
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🧪 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint           | Description         | Auth Required |
|--------|--------------------|---------------------|---------------|
| POST   | `/register`        | Register new user   | ❌            |
| POST   | `/login`           | User login          | ❌            |
| POST   | `/logout`          | User logout         | ❌            |
| GET    | `/verify-email`    | Email verification  | ❌            |
| GET    | `/user-profile`    | Get user profile    | ✅            |
| PUT    | `/updatedetails`   | Update name/email   | ✅            |
| PUT    | `/updateprofile`   | Update profile info | ✅            |
| PUT    | `/updatepassword`  | Change password     | ✅            |

---

## 🚀 Production Deployment

This project is deployed on **Oracle Cloud Free Tier** using Docker containers.

### Infrastructure
- **Compute:** VM.Standard.A1.Flex (2 OCPUs, 12GB RAM)
- **OS:** Oracle Linux 8 / Ubuntu 22.04
- **Database:** MongoDB Atlas (cloud)
- **Containers:** Frontend (nginx) + Backend (Node.js)

**Live Demo:** [Coming Soon]

---

## 🤝 Contributing
## 📌 About This Repository

This is a **personal portfolio project** created to demonstrate my full-stack MERN development and devOps skills to potential employers.

**Repository Guidelines:**
- 👀 **Feel free to view** the code and explore the implementation
- 🍴 **Fork allowed** for educational/learning purposes
- 🚫 **Not accepting contributions** or pull requests (personal project)
- 💬 **Questions?** Open an issue or contact me directly

This repository showcases my individual work on deployment, Dockerization, and production optimization of our original team project from DCI Berlin.

---


---

## 👥 Team & Credits

### Original Team (Balanced Beings - DCI Final Project)
- **Saveen** — Tech Lead, Full-stack Development / frontend
- **Ifeoma** — Scrum Master, Full-stack Development/ frontend
- **Chinedu** — Full-stack Developer/ frontend
- **Okile** — Full-stack Developer/ backend

### Personal Version Enhancements
- **OKILE** — Dockerization, Oracle Cloud deployment, production optimization, enhanced documentation

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📞 Contact

- **GitHub:** [@Ebosterix](https://github.com/Ebosterix)
- **Email:** okile.webdev@gmail.com
- **LinkedIn:** www.linkedin.com/in/otim-m-okile

---

## 🙏 Acknowledgments

- **DCI - Digital Career Institute Berlin** — Full-Stack Web Development Training October 2024 to November 2025
- **Balanced Beings Team** — Collaboration and teamwork
- **MongoDB Atlas** — Database hosting
- **Oracle Cloud** — Free tier infrastructure

---

**Made with ❤️ by Balanced Beings Team | Enhanced by [Otim M Okile]**
