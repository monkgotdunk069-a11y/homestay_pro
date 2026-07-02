# StayNest — Homestay Management Platform

A full-stack web application for discovering and managing homestay listings across India. Built with React + Vite (frontend) and Node.js + Express (backend).

---

## Project Structure

```
homestay-management/
├── backend/                    # Express REST API
│   ├── data/
│   │   └── homestays.js        # In-memory data store with CRUD helpers
│   ├── middleware/
│   │   ├── errorHandler.js     # Global error handler (4-arg middleware)
│   │   └── notFound.js         # 404 handler for undefined routes
│   ├── routes/
│   │   ├── homestays.js        # CRUD + search endpoints
│   │   └── stats.js            # Aggregate stats endpoint
│   ├── .env                    # Local env vars (gitignored)
│   ├── .env.example            # Required env variable names
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Express entry point
│
├── src/                        # React frontend (Vite)
│   ├── components/
│   │   ├── Card.jsx            # Homestay listing card
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx       # Host analytics (live API data)
│   │   ├── Home.jsx            # Listings grid (live API data)
│   │   └── Login.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── vite.config.js              # Vite config with /api proxy
└── README.md
```

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React 18 + Vite + Tailwind CSS v3 |
| Routing   | React Router DOM v6         |
| Backend   | Node.js + Express 4         |
| Data      | In-memory (no DB required)  |

---

## API Endpoints

| Method   | Path                         | Description               | Status Codes    |
|----------|------------------------------|---------------------------|-----------------|
| `GET`    | `/api/health`                | Health check              | 200             |
| `GET`    | `/api/homestays`             | List all (+ `?city=` filter) | 200          |
| `GET`    | `/api/homestays/search`      | Search (`?q=<term>`)      | 200, 400        |
| `GET`    | `/api/homestays/:id`         | Get single listing        | 200, 404        |
| `POST`   | `/api/homestays`             | Create new listing        | 201, 400        |
| `PUT`    | `/api/homestays/:id`         | Full update               | 200, 400, 404   |
| `PATCH`  | `/api/homestays/:id`         | Partial update            | 200, 404        |
| `DELETE` | `/api/homestays/:id`         | Delete listing            | 204, 404        |
| `GET`    | `/api/stats`                 | Aggregate statistics      | 200             |

---

## How to Run Backend Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Steps

**1. Navigate to the backend folder**

```bash
cd backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Create your `.env` file**

```bash
# Copy the example file
cp .env.example .env
```

The default values in `.env.example` work out of the box — no changes needed for local development.

**4. Start the development server**

```bash
npm run dev
```

The API will start at **http://localhost:5000**

You should see:
```
✅  StayNest API running at http://localhost:5000
```

**5. Test the API**

```bash
# Health check
curl http://localhost:5000/api/health

# Get all homestays
curl http://localhost:5000/api/homestays

# Search by keyword
curl "http://localhost:5000/api/homestays/search?q=manali"

# Get single homestay
curl http://localhost:5000/api/homestays/1

# Get stats
curl http://localhost:5000/api/stats

# Create a new homestay
curl -X POST http://localhost:5000/api/homestays \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Stay","city":"Shimla","state":"Himachal Pradesh","price":2500}'
```

---

## How to Run Frontend Locally

**1. From the project root, install dependencies:**

```bash
npm install
```

**2. Start the Vite dev server:**

```bash
npm run dev
```

The frontend runs at **http://localhost:5173**

> **Note:** The frontend proxies all `/api/*` requests to `http://localhost:5000`. Make sure the backend is running first.

---

## Environment Variables

See [`backend/.env.example`](./backend/.env.example) for all required variables.

| Variable    | Default         | Description                |
|-------------|-----------------|----------------------------|
| `PORT`      | `5000`          | Backend server port        |
| `NODE_ENV`  | `development`   | Environment mode           |
