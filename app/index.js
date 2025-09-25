const express = require('express');
const app = express();
const port = 3000;

// ERROR GRAVE - línea incompleta sin paréntesis
app.get('/', (req, res) => {
    res.send('¡Hola desde CI/CD!')
// ← FALTÓ el punto y coma y paréntesis de cierre

app.listen(port, () => {
    console.log('App escuchando en http://localhost:${port}');
});