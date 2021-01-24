const fs = require("fs")
const fsPromise = require("fs/promises")

const one = fs.readFile("./one.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log("one.txt: ", data)
})

const two = fs.readFile("./two.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log("two.txt: ", data)
})

const three = fsPromise.readFile("./three.txt", "utf8")

three
    .then((data) => {
        console.log("two.txt: ", data)
    })
    .catch((err) => {
        console.log(err)
    })