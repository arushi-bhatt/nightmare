var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

/*
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
*/

nightmare
  .goto('http://www.seleniumeasy.com/test/basic-first-form-demo.html')
  .type('#user-message', 'Hello My Name is Arushi Bhatt ,:)')
  .click('#search_button_homepage')
  //.wait('#zero_click_wrapper .c-info__title a')
  //.evaluate(function () {
   // return document.querySelector('#zero_click_wrapper .c-info__title a').href;
  //})
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  