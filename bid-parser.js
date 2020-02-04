const fs = require('fs');
const config = require('./config');

function parseBid() {
    return new Promise ( (resolve, reject)=> {
        fs.readFile(config.BIDJSON, (err, fileString) => {
     
             if (err) {
                 reject ("Error parsing file" + config.BIDJSON)
             }

             resolve(JSON.parse(fileString));
        });
    });
}


module.exports = {parseBid};

