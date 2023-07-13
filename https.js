const express = require("express");
const app = express();
const port = 443;

app.get('/se', (res, req) => {
    res.send('hi world!\n');
});

app.listen(port, ()=>{
    console.log(`on port ${port}`);
})