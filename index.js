const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// HTML faylini xizmat ko'rsatish
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // HTML faylingiz nomini va joylashuvini o'zgartiring
});

// Statik fayllarni xizmat ko'rsatish (CSS va boshqa fayllar uchun)
app.use(express.static(path.join(__dirname)));

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} manzilida ishga tushdi.`);
});
