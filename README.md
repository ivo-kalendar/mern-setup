# Fullstack MERN Setup with SSR and Vite

This repository contains a fullstack MERN (MongoDB, Express, React, Node.js) setup, optimized for both production and development environments. It includes server-side rendering (SSR) with separate servers for development and production, as well as a local client server powered by Vite. The project also features dynamic routing and a fully implemented database.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [License](#License)
- [Contact](#contact)

## Features

- **MERN Stack**: MongoDB, Express, React, Node.js
- **Server-Side Rendering (SSR)**: Separate servers for development and production
- **Vite**: Fast and optimized local client server
- **Dynamic Routing**: Flexible and scalable routing
- **Database Integration**: Fully implemented MongoDB integration

## Project Structure

```plaintext
.
├── config
│   ├── db.js
│   ├── devServer.js
│   └── prodServer.js
├── controllers
├── middlewares
├── models
├── node_modules
├── public
│   └── logo.svg
├── routes
│   └── router.js
├── src
│   ├── assets
│   ├── components
│   │    └── App.jsx
│   ├── context
│   ├── pages
│   ├── routes
│   ├── styles
│   │    ├── App.css
│   │    └── index.css
│   ├── utils
│   ├── entry-client.jsx
│   ├── entry-server.jsx
│   ├── index.jsx
│   └── Render.jsx
├── .env
├── .gitignore
├── CHANGELOG.md
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── server.js
├── TODO.txt
└── vite.config.js
```


## Installation

- **Clone the repository**: 

```bash
git clone https://github.com/ivo-kalendar/mern-setup.git
cd mern-setup
```

- **Install dependencies for both backend and client**:

```bash
npm run clean-install
```

- **Set up environment variables by creating a .env file in the root directory**:

```plaintext // TODO
MONGO_URI=your_mongodb_connection_string
PORT=your_server_port
```

## Usage

### Development
To run the development environment with hot-reloading:

Start the backend server:

```bash
npm run dev
```

Start the only vite client server:

```bash
npm run dev-client
```

### Production
To run the production environment:

- **Build the client for production**:
```bash
npm run build:client
```

- **Build the server for production**:
```bash
npm run build:server
```

- **Build the server and client forand start production server**:
```bash
npm run start
```

## Scripts

- **start**: Builds the client and server and starts the production server
- **dev**: Starts the backend server in development mode
- **dev-client**: Starts the Vite client server
- **build:client**: Builds the client for production
- **build:server**: Builds the server for production
- **build**: Builds the client and server for production
- **clean**: Removes the .vite_cache and dist folder
- **clean-deep**: Removes the node_modules package-lock.json .vite_cache and dist folder
- **clean-install**: runs clean-deep and npm install
- **clean-dev**: runs clean and dev
- **clean-start**: runs clean and start


## Environment Variables // TODO
- MONGO_URI: MongoDB connection string
- PORT: Port for the backend server

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
Created by [Ivo Kalendarov](mailto:ivokalendar@icloud.com).

Make sure to replace the placeholder GitHub URL in the "Clone of the repository" section with your actual repository URL. This README file provides clear and detailed instructions for users to set up, develop, and deploy the project.




