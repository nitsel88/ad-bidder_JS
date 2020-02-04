//Module with logic to generate html based on the markup string passed

const cheerio = require('cheerio')
const fs = require('fs')
const config = require('./config')

class TemplateGenerator {

    constructor(markup) {
      this.markup = markup
      this.formatMarkup()
    }

   //function to format the markup
    formatMarkup() {
       this.finalMarkup  = this.markup.replace(/\\n/g,"\\r")
     }

    //function to generate the HTML template
    genHtmltemplate() {

      return new Promise ((resolve, reject) => {
        //read the HTML template file
        fs.readFile(config.INPUTHTML, (err, fileString)=> {
          if (err) {
              reject ("Error reading file " + config.INPUTHTML)
          }
          //parse the html
          const $ = cheerio.load(fileString)
          $('body').append(this.finalMarkup)

          //create a main html file
          fs.writeFile(config.OUTPUTHTML, $.html(),  (err) => {
            if (err) {
                reject ("Error creating file" + config.OUTPUTHTML)
            } 
              resolve("Index.html created")
          })

        })
      })
    }
   }



  module.exports = TemplateGenerator;