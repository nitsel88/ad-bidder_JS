const fs = require('fs')


class BidParser {

constructor(bidJsonPath) {
    this.bidJsonPath = bidJsonPath
}    

 parseBid() {
    return new Promise ( (resolve, reject)=> {
        fs.readFile(this.bidJsonPath, (err, fileString) => {
     
             if (err) {
                 return reject ("Error parsing file" + this.bidJsonPath)
             }

             return resolve(JSON.parse(fileString))
        });
    });
}

}

module.exports = BidParser

