
var BidParser = require('../bid-parser/bid-parser')
var BidManager = require('../bid-manager/bid-manager')
var TempGenerator = require('../template-generator/template-generator')
var config = require('../config')


async function run() {
    //Parsing the JSON and getting all bids to an array of objects
  let bidParser = new BidParser(config.BIDJSON)
  let bidsObject = await bidParser.parseBid().catch((err) => {return (err)})

      //getting the object for selected bid from bid Manager
  let bidManager = new BidManager(bidsObject);
  let selectedBidObj = await bidManager.getSelectedBidder().catch((err) => {return (err)})

     //generate the final HTML template after doing the formating 
  let tempGenObj = new TempGenerator(config.INPUTHTML, selectedBidObj.bid[0].adm); 
  let finalOuput =  await tempGenObj.genHtmltemplate().catch((err) => {return (err)})
  
  return (finalOuput + " for id : " + selectedBidObj.bid[0].id + ", price : " + selectedBidObj.bid[0].price)
}


module.exports = {run}