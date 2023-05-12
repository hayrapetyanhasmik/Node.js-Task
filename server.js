const express = require('express');
const app = express();
app.use(express.json());

const {userRouters} = require('./routers/userRouters');
const {postRouters} = require('./routers/postRouters');


app.get('/', (req, res) => {
  res.send('Hello World!');
});





userRouters(app);
postRouters(app);

app.listen(5000, () => {
    console.log('Server running on port 5000');
  });