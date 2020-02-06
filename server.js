'use strict';
var bidProcessor = require('./bid-processor/bid-processor')


//Start of the program
bidProcessor.run().then((finalOutput)=>{
   console.log(finalOutput)
}).catch((err)=>{
   console.log(err)
})