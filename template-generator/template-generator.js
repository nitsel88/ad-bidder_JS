//Module with logic to generate html based on the markup string passed
const cheerio = require('cheerio')
const fs = require('fs')

var OUTPUTHTML = 'public/index.html'

class TemplateGenerator {

    constructor(htmlTemplate, markup) {
      this.htmlTemplate = htmlTemplate
      this.markupToAppend = markup
      //format the markup
      this.formatMarkup()
    }

   //function to format the markup
    formatMarkup() {
       this.finalMarkup  = this.markupToAppend.replace(/\\n/g,"\\r")
     }

    //function to generate the HTML template
    genHtmltemplate() {

      return new Promise ((resolve, reject) => {
        //read the HTML template file
        fs.readFile(this.htmlTemplate, (err, fileString)=> {

          if (err) {
             return reject ("Error reading file " + this.htmlTemplate)
          } 

          //parse the html
          const $ = cheerio.load(fileString)
          $('body').append(this.finalMarkup)

          //create a main html file
          fs.writeFile(OUTPUTHTML, $.html(),  (err) => {
            if (err) {
                return reject ("Error creating file" + OUTPUTHTML)
            } 
              return resolve( OUTPUTHTML + " - created")
          })
        })
      })
    }
   }


  module.exports = TemplateGenerator;