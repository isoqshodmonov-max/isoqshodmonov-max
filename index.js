const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Public papkasini statik fayl sifatida belgilash
app.use(express.static(path.join(__dirname, 'public')));

// Asosiy yo'l
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
