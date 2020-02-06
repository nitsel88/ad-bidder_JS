class BidManager {
 
 constructor(bidsObj) {
  this.bidsObj = bidsObj;
 }
 
 getSelectedBidder() {
   return new Promise((resolve, reject)=>{
        if(!this.bidsObj) {
          return reject('BidManager needs to be initialized with bids object')
        }
        let selectedbidsObj = this.bidsObj.seatbid.reduce((max, current) => current.bid[0].price >= max.bid[0].price ? current : max)
        return resolve(selectedbidsObj)
   })
  }
}

module.exports = BidManager