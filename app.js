const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/page', getQuery);
app.get('/page/:id', getQuery);
app.get('/page/:id/:mode', getQuery);

function getQuery(req,res) {
    var id = req;
    // var mode = req.query.mode;
    var pageTitles = ["MAIN","PAGE1","PAGE2","PAGE3"];
    var html = `
    <ul>
    <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=0">Main</a></li>
    <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=1">Page1</a></li>
    <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=2">Page2</a></li>
    <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=3">Page3</a></li>
    <li style="clear:both;"></li>
    </ul>
    <div style="text-align:center">
    <h1>${pageTitles[id]}</h1>
    </div>`
    res.send(html);
}

// app.get('/page', (req,res) => {
//     var id = req.query.id;
//     var pageTitles = ["MAIN","PAGE1","PAGE2","PAGE3"];
//     var html = `
//     <ul>
//     <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=0">Main</a></li>
//     <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=1">Page1</a></li>
//     <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=2">Page2</a></li>
//     <li style="padding:1rem;list-style:none;float:left;width:20%;"><a href="/page?id=3">Page3</a></li>
//     <li style="clear:both;"></li>
//     </ul>
//     <div style="text-align:center">
//     <h1>${pageTitles[id]}</h1>
//     </div>`
//     res.send(html);
// });

app.get('/book/science', (req,res) => {
    var html = `<h1>Science1</h1>`
    res.send(html);
});
app.get('/info', (req,res) => {
    var now = new Date();
    var html = `<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Information</title>
    </head>
    <body>
        <h1>Information Page</h1>
        <h2>${now}</h2>
    </body>
    </html>
    `;
    res.send(html);
})

//RESTful Routing
//app.get('/', (req, res) => res.send('Hello World!'))
// app.post('/', (req, res) => res.send('Hello World!'))
// app.put('/', (req, res) => res.send('Hello World!'))
// app.delete('/', (req, res) => res.send('Hello World!'))


// app.get('/', (req, res) => res.redirect());

app.listen(port, () => console.log(`http://localhost:${port}`))