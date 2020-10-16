const util = require('util');
const fs = require('fs');
const uniqid = require('uniqid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class db {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {

    }

    addNote(note) {

    }

    removeNote(id) {

    }
}