const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(port, () => console.log(`Server on port ${port}!`));
