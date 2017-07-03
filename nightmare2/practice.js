var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line

describe('test duckduckgo search results', function() {
  it('should find the nightmare github link first', function(done) {
    var nightmare = Nightmare()
    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#zero_click_wrapper .c-info__title a')
      .evaluate(function () {
        return document.querySelector('#zero_click_wrapper .c-info__title a').href
      })
      .end()
      .then(function(link) {
        expect(link).to.equal('https://github.com/segmentio/nightmare');
        done();
      })
  });
});
