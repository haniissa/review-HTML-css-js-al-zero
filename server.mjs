import express from 'express';
// import path from 'path';

const app = express();

const port = 3000;
// const direction = path(_dirname);

app.use(express.static('project'));

app.listen(port, () => {
  console.log(`server run on PORT ${port}`);
});
