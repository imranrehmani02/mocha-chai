const express = require('express');
const PORT = 3002;
const userRouter = require('./routes/userRouter');

const app = express();

app.use('/users',userRouter);
app.get('/',(req,res)=>{
    res.send("Unit testing Project")
})

module.exports = app.listen(PORT,()=>{
    console.log(`App running on :- http://localhost:${PORT}`);
})