const movieController = require('./Controllers/MovieController.js')

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.use(express.json());

app.get('/api/movies', movieController.get);

app.post('/api/movies', movieController.post);

app.put('/api/movies', movieController.put);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

