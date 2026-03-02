# Fullstack MERN Setup with SSR and Vite 🚀

This repository contains a cutting-edge fullstack MERN (MongoDB, Express 5, React 19, Node.js 22) setup, optimized for both production and development environments. It features high-performance Server-Side Rendering (SSR) with Vite 7 and zero security vulnerabilities.

---

## 🛠 Technologies & Versions

* **React:** 19.2.4 (Latest)
* **Express:** 5.2.1 (Next-Gen Routing)
* **Vite:** 7.3.1 (Lightning Fast Build Tool)
* **MongoDB:** 7.1.0 (Native Driver)
* **React Router:** 7.13.1
* **Node.js:** 22.x (LTS)

---

## 📁 Project Structure

The project is organized for clean separation of concerns:

/
├── client/              # React frontend
│   ├── assets/          # Static files & images
│   ├── components/      # UI Components (App.jsx)
│   ├── entry/           # SSR & Client Hydration logic
│   │   ├── entry-client.jsx
│   │   └── entry-server.jsx
│   ├── routes/          # Frontend Rroutes.jsx
│   └── styles/          # Global & component CSS
├── server/              # Backend core
│   ├── db.js            # MongoDB connection logic
│   ├── devServer.js     # Vite SSR Development middleware
│   ├── prodServer.js    # Optimized Production server
│   └── index.js         # Server entry point
├── routes/              # Express API routes (router.js)
├── public/              # Public assets (logo.svg)
├── dist/                # Production build output (generated)
├── index.html           # HTML template for Vite
├── vite.config.js       # Vite 7 configuration
└── package.json         # Scripts and dependencies

---

## 🚀 Installation & Setup

1. **Clone the repository**:
```
git clone https://github.com/ivo-kalendar/mern-setup.git
cd mern-setup
```

2. **Clean install all dependencies**:
This command ensures a fresh state by removing old cache and node_modules.
```
npm run clean-install
```

3. **Environment Variables**:
Create a `.env` file in the root directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=7788
NODE_ENV=development
```

---

## 💻 Usage

### Development Mode
To run the fullstack environment with SSR and Hot Module Replacement (HMR):
```
npm run dev
```

To run only the Vite client server:
```
npm run dev-client
```

### Production Mode
To build and start the optimized production environment:
```
npm run start
```

---

## 📜 Available Scripts

* **start**: Full production cycle (build:client + build:server + preview)
* **dev**: Starts the backend server with SSR enabled
* **build**: Compiles both client and server for production
* **clean-deep**: Hard reset (removes node_modules, lock-files, and dist)
* **clean-install**: Runs clean-deep followed by npm install
* **preview**: Starts the production-ready server from the /dist folder

---

## 🧠 Key Features

* **Express 5 Routing**: Implements the latest `path-to-regexp` logic for secure and strict routing.
* **React 19 SSR**: Ready for the latest concurrent features and hydration optimizations.
* **Zero Vulnerabilities**: All packages are pinned to secure, audited versions.
* **Vite 7 Middleware**: Seamless integration between Vite's dev server and Express.

---

## ✍️ Author
**Ivo Kalendarov** - [ivokalendar@icloud.com](mailto:ivokalendar@icloud.com)

This project is licensed under the MIT License.