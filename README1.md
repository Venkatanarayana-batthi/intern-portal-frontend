
# 🖥️ Intern Portal - Full Stack Project (Frontend + Backend)

This is a simple **Intern Dashboard Portal** built as a Full Stack project using **HTML/CSS/JavaScript (Frontend)** and **Node.js + Express (Backend)**.

It demonstrates basic **frontend-backend integration**, **API consumption**, and **deployment of both frontend and backend on free hosting platforms**.

---

## 🌟 Project Overview

- **Frontend:** A simple web portal with Dashboard, Leaderboard, and Rewards pages.
- **Backend:** A REST API built using Node.js + Express to serve dummy intern data.
- **Hosting:** 
  - Frontend on **GitHub Pages**.
  - Backend API on **Render.com (Free Tier)**.

---

## 📁 Folder Structure

```
/frontend
  ├── index.html            # Dummy Login Page
  ├── dashboard.html        # Intern Dashboard
  ├── leaderboard.html      # Leaderboard Page
  ├── style.css             # Stylesheet
  └── script.js             # JS to fetch data from backend API

/backend
  ├── package.json          # Node.js dependencies and start script
  └── server.js             # Express API Server
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/intern-portal-frontend.git
git clone https://github.com/your-username/intern-portal-backend.git
```

### 2. Run Backend Locally
```bash
cd intern-portal-backend
npm install
node server.js
```
The backend will run on `http://localhost:5000`.

### 3. Open Frontend Locally
- Open `index.html` directly in your browser.
- Make sure `script.js` is pointing to `http://localhost:5000/api`.

---

## 🌍 Deployment Process

### Frontend Deployment (GitHub Pages)
1. Push your `/frontend` files to a GitHub Repository.
2. Go to **Repo Settings → Pages → Select branch: main → /root**.
3. GitHub will generate a public URL to access the site.

### Backend Deployment (Render.com)
1. Push your `/backend` files to a separate GitHub Repository.
2. Go to [Render](https://render.com/) → New Web Service.
3. Connect your repo, select **Node.js**, set build/start commands:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Deploy and use the provided Render URL as your API endpoint.

---

## 🔗 Live Demo Links
- **Frontend:** [GitHub Pages Live Site](https://Venkatanarayana-batthi.github.io/intern-portal-frontend/)
- **Backend API:** [Render API URL](https://intern-portal-backend-9awn.onrender.com/api)

---

## 🛠️ How the Project Works
1. The frontend loads static HTML/CSS content.
2. On page load, **script.js** sends fetch requests to the backend API endpoints.
3. Backend responds with dummy JSON data for:
   - Intern Name, Referral Code, Donations (`/api/user`).
   - Leaderboard data (`/api/leaderboard`).
4. The frontend updates the DOM to display this data dynamically.

---

## 📚 Key Learnings
- Full Stack App Structure (Frontend + Backend).
- Connecting frontend with backend APIs.
- Deploying frontend on **GitHub Pages**.
- Deploying backend API on **Render Free Tier**.
- Git Version Control, Repository Management, and Deployment Workflow.
