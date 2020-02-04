
var bidParser = require('./bid-parser');
var bidLogic = require('./bid-logic');
var TempGenerator = require('./template-generator');


    //Parsing bid json
bidParser.parseBid().then((bidsObject) => {
    //getting the selected bidder
      let selectedBidObj = bidLogic.getSelectedBidder(bidsObject); 
       //generating the final HTML template with mark from selected bidder       
      let tempGenObj = new TempGenerator(selectedBidObj.bid[0].adm);      
      tempGenObj.genHtmltemplate().then((finalOutput)=>{
           console.log(finalOutput);
      }).catch ((errMsg)=>{
       console.log(errMsg)
      })   
     }).catch ((errMsg)=>{
    console.log(errMsg)
   })


