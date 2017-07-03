var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://www.seleniumeasy.com/test/basic-first-form-demo.html')
  .type('#user-message', 'Hello My Name is Arushi Bhatt ,:)')
  //.click('#search_button_homepage')
  //.wait('#zero_click_wrapper .c-info__title a')
  .evaluate(function () {
    return document.querySelector('#zero_click_wrapper .c-info__title a').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
  