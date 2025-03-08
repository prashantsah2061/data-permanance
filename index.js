const express = require('express'); 
const nedb = require("nedb-promises"); 

const app = express(); 
const db = nedb.create('myfile.jsonl'); 

app.use(express.static('public')); 


app.get('/search', (req, res) => {
    try {
        const query = JSON.parse(req.query.find)
        db.find(query)
        .then(docs => {
            const results = docs.map(doc => JSON.stringify(doc, null, 2)).join("\n")
            res.send(results)
        })
    } catch (error) {
        res.send('Couldnot execute search')
    }
})

app.get('/insert', (req, res) => {
    try {
        const doc = JSON.parse(req.query.doc)
        db.insert(doc)
        .then(doc => {
            res.send( "inserted \n" + JSON.stringify(doc, null, 2))
        })
    } catch (error) {
        res.send("Couldn't insert document")
    }
})

// . . . . .
// default route
app.all('*',(req,res)=>{res.status(404).send('Invalid URL.')});

// start server
app.listen( 3000, () => console.log('server started at http://localhost:3000') );