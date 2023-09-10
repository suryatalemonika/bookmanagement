const express = require('express');
const { insertData } = require('./insert');
const { updateData } = require('./update');
const { deleteData } = require('./delete');
const { getData } = require('./getdata');
const app = express();

app.use(express.json())
app.get('', async (req, res) => {
    console.log('show books in lab')
    let result = await getData()
    res.send(result);
})

app.post('/add', async (req, res) => {
    console.log('add books in lab')
    let result = insertData(req.body)
    res.send(await result);
})

app.put('/update', async (req, res) => {
    console.log('update books in lab')
    let result = await updateData(req.body)
    res.send(result)
})

app.delete('/delete', async (req, res) => {
    console.log('delete books from lab')
    let result = await deleteData(req.body)
    res.send(result)
})

app.listen('5005', () => {
    console.log('app is running on port 5000 ');
})