var BidParser = require('./bid-parser')
var chai = require('chai')
var expect = chai.expect
chai.use(require('chai-as-promised'))

describe('bid-parser', function() {

  describe('#parseBid()', function() {
    it('should return a object when it is able to parse the json file', function() {
      let bidParser = new BidParser('bid-response.json')
       return expect(bidParser.parseBid()).to.eventually.be.a('object');
    });

    it('should be rejected with an error when invalid filename is passed - Error parsing file', function() {
       let bidParser = new BidParser('')
       return expect(bidParser.parseBid()).to.be.rejectedWith('Error parsing file');
    });
  });
});