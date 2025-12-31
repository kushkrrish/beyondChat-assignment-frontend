# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



---

## 🎨 Frontend Setup (React + Vite + Tailwind CSS)

### 🔗 Repository

```bash
git clone https://github.com/kushkrrish/beyondChat-assignment-frontend.git
```

---

### 📂 Navigate to Project

```bash
cd beyondChat-assignment-frontend
```

---

### 📦 Install Dependencies

```bash
npm install
```

---

### ⚙️ Environment Configuration (Optional)

Create a `.env` file in the root directory if your frontend uses an API base URL:

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

📌 **Note:**
Vite requires environment variables to be prefixed with `VITE_`.

---

### ▶️ Start Development Server

```bash
npm run dev
```

---

### 🌐 Access Application

Once the server starts, open your browser at:

```text
http://localhost:5173
```

---

## 🧩 Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (v4)
* **State Management:** React Hooks
* **API Communication:** Axios / Fetch
* **Build Tool:** Vite

---

## 📁 Project Structure (Simplified)

```text
src/
├── components/        # Reusable UI components
├── pages/             # Page-level components
├── services/          # API calls
├── styles/            # Global styles (Tailwind)
├── App.jsx            # Root component
└── main.jsx           # App entry point
```

---

## ✅ Tailwind CSS Notes (v4)

Tailwind v4 uses a simplified setup:

```css
/* src/index.css */
@import "tailwindcss";
```

Ensure it is imported in `main.jsx`:

```js
import "./index.css";
```

---

## 🚀 Ready to Go

Your frontend is now up and running and connected to the backend APIs.
### URL for website
```url
https://gentle-praline-8625fd.netlify.app/

```

---

