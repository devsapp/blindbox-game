const express = require('express');
const fs = require('fs');
const path = require('path');

const { 
    prize,
    addInformation,
    queryInformation } = require('./services');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('www')); 
app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html;charset=utf-8')
    const filePath = path.resolve(__dirname, './www/index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    res.send(html);
});

app.post('/api/v1/bba/prize', async(req, res) => {

    const uid = req.get('x-fc-account-id');
    const reult = await prize(uid)
    res.send(reult)
});

app.get('/api/v1/bba/information', async(req, res) => {
  const uid = req.get('x-fc-account-id');
  const token = req.query.token;
  const result = await queryInformation({
    uid, token
  })
  res.send(result)
});

app.post('/api/v1/bba/information', async(req, res) => {
  const uid = req.get('x-fc-account-id');
  const token = req.body.token;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const result = await addInformation({
    uid, token, name, phone, address
  })
  res.send(result)
});

app.listen(9000, () => {
    console.log('start success.');
}).on('error', (e) => {
    console.error(e.code, e.message)
});

