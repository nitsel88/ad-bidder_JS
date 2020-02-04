# Verizon Media SSP Technical Test

Summary:
The coding task mimics elements of an advertising auction.
A user visits a web page, in the background an ad platform initiates an auction.
The ad platform contacts bidders providing the opportunity for an advertiser 
to show an ad to the end user. The advertiser is a bidder into the auction.
The selected winning ad is displayed to the end user.
The coding challenge is to process the bids and select a winner.

Logistics:
You have 7 days to complete the challenge.
Use your skills, tools and information sources that you would typically use to complete any task
Zip your results and share back with the recruitment team
Include sources, outputs but exclude executables/class files

Background:
The attached JSON bid-response.json file represents a bid into the ad auction
The bid response JSON contains a seatbid which contains multiple bids
Each bid contains a bid price (field name: price) and an ad html/js markup (field name: adm)

Task:
1. Parse the JSON to retrieve the price, id and adm fields for each bid
2. Retain all bids in a data structure
3. Identify the winning bid using the highest price
4. Replace all occurrences of “\n” with carriage return (not including quotes) 
5. Then replace all occurrences of “\\” with “\” (not including quotes) 
6. Write the processed output ad markup to the body of an HTML file (You can use the sample template)
7. Trace out the id and price of the winning bid

Scoring:
The marking of the solution is made on these factors
1. A correct solution
2. Good code structure
3. Tests and testability
4. Extensibility 
5. Error Handling and Failure cases (e.g. Parse failure, Empty arrays)

FAQ:
Q: Can I use libraries?
A: Yes

Q: Can I use Docker?
A: Yes

Q: The markup does not render correctly?
A: Get the core functionality in place. Do not overly focus on perfect HTML/JS
