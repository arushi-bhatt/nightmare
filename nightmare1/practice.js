var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

/*
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
*/

nightmare
  .goto('http://www.seleniumeasy.com/test/basic-first-form-demo.html')
  .type('#sum1', '9')
  .type("#sum2", "9")
  .click('#gettotal > button')
  .wait(3000)
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  


  //*[@id="get-input"]/button

  