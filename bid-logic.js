function getSelectedBidder(bidsObj) {

    return new Promise ((resolve, reject)=> {
          
        selectedbidsObj = bidsObj.seatbid.reduce((max, current) => current.price >= max.price ? current : max, {price: 0})

        resolve (selectedbidsObj);
    })

}


module.exports = getSelectedBidder;