// @ts-check

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // 공식화
app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router1 = require('./routes/index1');
const router2 = require('./routes/index2');


app.use('/', router1);
app.use('/', router2);


app.listen(3006, () => {
  console.log(`서버가 3006번 포트에서 작동중입니다.`);
});
