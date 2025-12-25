# BeyondChats – Full Stack Technical Assignment

## 📌 Project Summary

This project is a **full-stack application** that:

* Stores blog articles
* Enhances articles using AI logic
* Displays both **original** and **enhanced** articles in a frontend UI

The project demonstrates **backend APIs**, **automation using Node.js**, and a **React frontend**.

---

## 🧠 Architecture / Data Flow Diagram

```
┌──────────────────────────────────────────────┐
│                  FRONTEND                    │
│               React Application              │
│                                              │
│  - Displays original articles                │
│  - Displays enhanced articles                │
│  - Shows enhanced badge ✨                   │
└───────────────▲──────────────────────────────┘
                │ API Calls
                │
┌───────────────┴──────────────────────────────┐
│                  BACKEND                     │
│               Laravel API                    │
│                                              │
│  - Stores articles in database               │
│  - Exposes CRUD APIs                         │
│  - Links original & enhanced articles        │
└───────────────▲──────────────────────────────┘
                │
                │ Fetch & Save
                │
┌───────────────┴──────────────────────────────┐
│             NODE.JS SCRIPT                   │
│        Article Enhancement Automation        │
│                                              │
│  - Fetches latest article                    │
│  - Enhances article using AI logic           │
│  - Saves enhanced version back to backend    │
└──────────────────────────────────────────────┘
```

---

## 🔁 How Data Flows Through the System

1. **Laravel backend** stores original articles in the database
2. **React frontend** fetches and displays these articles
3. **Node.js script** fetches the latest original article
4. The script enhances the article content
5. Enhanced article is saved back to the backend
6. Frontend shows both original and enhanced versions

---

## 🧰 Tech Stack Used

* **Backend**: Laravel (PHP)
* **Database**: MySQL
* **Automation / AI**: Node.js
* **Frontend**: React
* **API Communication**: REST APIs

---

## ⚙️ Local Setup Instructions

### 1️⃣ Backend (Laravel)

```bash
# Create Laravel project
composer create-project laravel/laravel backend
cd backend

# Configure .env with database details

# Run migrations & seed data
php artisan migrate
php artisan db:seed

# Start backend server
php artisan serve
```

Backend will run at:
👉 `http://localhost:8000`

---

### 2️⃣ Node.js Enhancement Script

```bash
# Create Node.js project
mkdir nodejs-enhancer
cd nodejs-enhancer
npm init -y
npm install axios dotenv

# Add enhanceArticle.js file
# Create .env file
```

`.env`

```env
LARAVEL_API_URL=http://localhost:8000/api/v1
```

Run the script:

```bash
node enhanceArticle.js
```

This will:

* Fetch the latest article
* Create an enhanced version
* Save it back to Laravel

---

### 3️⃣ Frontend (React)

```bash
npx create-react-app frontend
cd frontend
npm install axios
npm start
```

Frontend will run at:
👉 `http://localhost:3000`

---

## 🌐 Live Frontend Link

🔗 **Live Project URL:**
👉 **[https://your-frontend-live-link-here](https://your-frontend-live-link-here)**

> Replace this with your actual deployed frontend link
> (Vercel / Netlify / Render / etc.)

The live app allows reviewers to:

* View original articles
* View enhanced articles
* See the difference clearly

---

## 🧪 How to Test the Complete Flow

1. Open the frontend link
2. View original articles
3. Run the Node.js enhancement script
4. Refresh frontend
5. Enhanced article will appear with ✨ badge

---

## 🎯 Key Highlights

* Clean and simple architecture
* Beginner-friendly code
* Clear separation of backend, automation, and frontend
* Realistic AI-style workflow
* Easy to explain in interviews

---

## 🏁 Final Notes

This project focuses on:

* **Clarity over complexity**
* **Real-world workflow simulation**
* **Strong fundamentals**

Perfect for a **fresher / intern-level full-stack assignment**.

---

✅ **Project Status: Completed & Ready for Review**

