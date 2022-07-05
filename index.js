const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const xablau = `
<h1>Contrate o Rafael Perdigão agora mesmo!</h1>
  <p>Seu e-mail é dev.rafaelpermec@gmail.com</p><br>
  <h2>Estamos ouvindo sua porta ${port}, viu?</h2>`;

app.get('/', (req, res) => res.send(xablau));
app.listen(port, () => console.log(`Online: ${port}`));
