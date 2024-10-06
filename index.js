import express from 'express';

const app = express();
const porta = 3000;

// rota básica
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});