const fs = require('fs')
// const book = {
//     title: "Ego is the Enemy",
//     Authore: "Ryan Holiday"
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
const dataJSON = dataBuffer.toString()
console.log(dataJSON)
const data = JSON.parse(dataJSON)
data.name = "Chunduri Manohar";
data.age = 21;
console.log(data)
fs.writeFileSync('1-json.json', JSON.stringify(data))