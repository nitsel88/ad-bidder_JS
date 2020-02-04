function getSelectedBidder(bidsObj) {
       
        selectedbidsObj = bidsObj.seatbid.reduce((max, current) => current.bid[0].price >= max.bid[0].price ? current : max)

        return selectedbidsObj;


}


module.exports ={getSelectedBidder};