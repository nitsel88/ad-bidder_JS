var BidManager = require('./bid-manager')
var chai = require('chai')
var expect = chai.expect


describe('bid-manager', function() {

  describe('#getSelectedBidder()', function() {

  let mockResponse={id:"7GavlTEwLjEqMJCsXDYRgAA.NDAuMQAAAABfH3Iz-0",seatbid:[{bid:[{id:"7GavlTEwLjEqMJCsXDYRgAA.NDAuMQAAAABfH3Iz-0",impid:"1",price:2.583,adm:"testcon\\tenet'\n'",adomain:["chewy.com"],w:300,h:250,crid:"4586-300x250-HTML"}],seat:"9348"},{bid:[{id:"r48KQjc0LjbbJCqkWt8BeACCMTc0LgAAAABfH.XG-0",impid:"1",price:5.01089295,adm:"testcon\\tenet'\n'","adomain":["choosenissan.com"],w:300,h:250,crid:"950933"}],seat:"9205"}]}
    

    it('should return a object when it is able to parse the json file', function() {
      let bidManager = new BidManager(mockResponse)
       return expect(bidManager.getSelectedBidder()).to.eventually.be.a('object');
    });

    it('should return a bidder object having maximum price', function() {
      let bidManager = new BidManager(mockResponse)
       return expect(bidManager.getSelectedBidder()).to.eventually.have.nested.property("bid[0].price", 5.01089295)
    });
  });
});