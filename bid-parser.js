const fs = require('fs');
const config = require('./config');

function parseBid() {
    return new Promise ( (resolve, reject)=> {
        fs.readFile(config.BIDJSON, (err, fileString) => {
     
             if (err) {
                 throw "Error parsing bid-response.json"
             }

             resolve(JSON.parse(fileString));
        });
    });
}



module.exports = parseBid;

