const fs = require("fs");
const path = require("path");

function accessJSON(file){
    const filePath = path.join(__dirname, file + ".json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    if(fileData === "") return [];
    return JSON.parse(fileData);
}

function writeOnJSON(file, newData) {
    const filePath = path.join(__dirname, file + ".json");
    const fileToString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileToString);
}

module.exports = { accessJSON, writeOnJSON };