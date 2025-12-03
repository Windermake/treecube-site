// server.js
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Папка, где лежат HTML, CSS, JS
app.use(express.static(path.join(__dirname, "public")));

// Главная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "test.html"));
});

// Страница 404
app.use((req, res) => {
    res.status(404).send("Страница не найдена 😥");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
