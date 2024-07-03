require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res) =>{
    res.send('sudarshan')
})

app.get('/Sudarshan',(req, res)=>{
    res.send('<h2> Sudarshan Aur Coding </h2>')
})

app.get('/login',(req,res) =>{
res.send('<h1> Please Login at Chaugules House </h1>')})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})