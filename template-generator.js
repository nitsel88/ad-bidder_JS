//Module with logic to generate html based on the markup string passed

const cheerio = require('cheerio');
const fs = require('fs');
const config = require('./config');

class TemplateGenerator {

    constructor(markup) {
      this.markup = markup;
      this.formatMarkup();
    }

   //function to format the markup
    formatMarkup1() {

        const slash = `\u{5c}`;
        const doubleSlash = `${slash}${slash}`;
        var regx = `/${doubleSlash}/g`;
        this.markup.replace(regx, `${slash}`)
         

    }

       //function to format the markup
       formatMarkup1() {

        var dict = {
          '\u005C\u005C': '\u005C',
          '\n': '\r'
        }
        str.replace(/[\u005C\n]/g, (char) => dict[char] || '');
      }
    
    //function to generate the HTML template
    genHtmltemplate() {
        //read the HTML template file
        fs.readFile(config.INPUTHTML, (err, fileString)=> {
          if (err) {
              throw "Error reading template.html";
          }
          //parse the html
          const $ = cheerio.load(fileString)
          $('body').append(this.markup)

          //create a main html file
          fs.writeFile(config.OUTPUTHTML, $.html(), function (err) {
            if (err) {
                throw "Error creating index.html";
            } 
             
            console.log("index.html file created");

          });

        })
    }
 
  };



  module.exports = TemplateGenerator;