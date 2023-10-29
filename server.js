const express = require('express');
const { insertData } = require('./insert');
const { updateData } = require('./update');
const { deleteData } = require('./delete');
const { getData, GetdatabyId } = require('./getdata');
const app = express();

app.use(express.json())
app.get('', async (req, res) => {
    let result = await getData()
    console.log(`------------------------------------list of books ----------------------------------`)
    console.log(result);
    res.send(result);
})

app.get('/search/:_id', async function (req, res) {
    let result = await GetdatabyId(req.params._id);
    console.log(`------------------------------------details of book id ${req.params._id} ----------------------------------`)
    console.log(result);
    res.send(result);
})

app.post('/add', async (req, res) => {
    let result = insertData(req.body)
    console.log(`------------------------------------added books in database ----------------------------------`)
    console.log(result);
    res.send(await result);
})

app.put('/update', async (req, res) => {
    let result = await updateData(req.body);
    console.log(`------------------------------------updated books in database ----------------------------------`)
    console.log(result);
    res.send(result)
})

app.delete('/delete', async (req, res) => {
    let result = await deleteData(req.body)
    console.log(`------------------------------------deleted books from database ----------------------------------`)
    console.log(result);
    res.send(result)
})

app.listen('5005', () => {
    console.log('app is running on port 5000 ');
})