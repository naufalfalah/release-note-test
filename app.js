const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const port = 3000;

// Middleware untuk melayani file statis
app.use(express.static('public'));

// Menggunakan router
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});