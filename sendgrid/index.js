const express = require('express');
const email = require('./email');

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
})

app.post('/api/email', async (req, res, next) => {
  try {
    res.json(await email.sendMail(req.body));
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});


  return;
});

app.listen(port, () => {
  console.log(`Example API listening at http://localhost:${port}`)
});