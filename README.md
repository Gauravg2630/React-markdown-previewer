# 📝 Markdown Previewer

A full-stack Markdown Previewer that allows users to write Markdown in a text area and see the formatted HTML in real-time. Built using **HTML/CSS/JavaScript** (Frontend) and **Node.js/Express.js** (Backend), with `marked.js` for Markdown parsing.

---

## 📁 Project Structure

markdown-previewer/
│
├── frontend/ # Frontend files
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/ # Backend files
│ ├── controllers/
│ │ └── markdownController.js
│ ├── routes/
│ │ └── markdownRoutes.js
│ ├── server.js
│ └── package.json
│
└── README.md

---

## 🚀 Features

- 🖋️ Live Markdown input with real-time HTML preview
- ⚡ Converts Markdown to HTML using `marked.js`
- 🌐 REST API backend with `/api/convert` endpoint
- 📦 Easy to extend and customize

---

## 🛠️ Tech Stack

### Frontend:
- HTML
- CSS
- JavaScript

### Backend:
- Node.js
- Express.js
- marked (Markdown parser)

---

## 🔧 Getting Started

### 
1️⃣ Clone the Repository
git clone https://github.com/Gauravg2630/React-markdown-previewer.git
cd markdown-previewer

2️⃣ Install Backend Dependencies
cd backend
npm install
Make sure marked is installed:
npm install marked

3️⃣ Start the Backend Server
# From the backend/ directory
node server.js
Server will run at:
http://localhost:5000

4️⃣ Open the Frontend
You can simply open frontend/index.html in your browser:
cd ../frontend
# Then right-click index.html → Open with Live Server (or browser)

🔄 How It Works
You type Markdown text in the left textarea.
JavaScript sends the Markdown to the backend via POST /api/convert.
The backend uses marked to convert it into HTML.
The HTML is displayed in the preview area on the right.

📷 Screenshot 

![App Preview](Screenshot%20(525).png)

📌 Example Markdown Input
# Hello Markdown 👋

- **Bold**
- *Italic*
- `Inline code`

> Blockquote
js
// Code block
console.log("Hello, World!");
---

## 💡 Future Improvements

- [ ] Dark/Light mode toggle
- [ ] Download as `.md` or `.html`
- [ ] Client-side Markdown rendering (no backend)
- [ ] Save sessions to localStorage or database

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

**Gorav Gumber**  
📫 [Connect on LinkedIn](https://www.linkedin.com/in/gorav-gumber-9319a2342/)
