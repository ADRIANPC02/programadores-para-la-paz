const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(3000, () => {
    console.log('Servidor ejecut ndose en puerto 3000');
});
