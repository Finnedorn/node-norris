const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const fs = require("fs");
const path = require("path");

function accessJSON(file){
    const filePath = path.join(__dirname, file + ".json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

function writeOnJSON(file, newData) {
    const filePath = path.join(__dirname, file + ".json");
    const fileToString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileToString);
}



