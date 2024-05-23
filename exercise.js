const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const fs = require("fs");
const path = require("path");
const { accessJSON, writeOnJSON } = require("./functions");


const server = http.createServer( (req, res) => {
    const norrisData = accessJSON("norrisDB");
    if (req.url === "/favicon.ico") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end();
        return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            let page = "<ul>";
            const randomJoke = data.value;
            if(!norrisData.includes(randomJoke)){
                norrisData.push(randomJoke);
                writeOnJSON("norrisDB", norrisData);
            }
            norrisData.forEach(element => {
                page += `<li>${element}</li>`;
            });
            page += "</ul>";
            res.end(page);
        })

});

server.listen(port, host, ()=>{
    console.log(`Ho avviato il server su http://${host}:${port}`)
});

