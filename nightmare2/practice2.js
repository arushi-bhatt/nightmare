"use strict";
const Nightmare = require( "nightmare" ),
      expect = require( "chai" ).expect,
      BASE_URL = "http://todomvc.com/examples/backbone/",
      onError = ( err ) => {
        console.error( "Test-runner failed:", err );
      },
      browser = new Nightmare({
        show: true,
        typeInterval: 20,
        pollInterval: 50
      });


      describe( "TODO", function(){
  this.timeout( 5000 );
  // start up with the blank list
  before(( done ) => {
    browser
        .goto( BASE_URL )
        .evaluate(() => {
          return localStorage.clear();
        })
        .wait(2000)
        .then(() => {
          done();
        });
  });
  // disconnect and close Electron process
  after(() => {
    browser
      .end();
  });
// insert here the tests
});



it( "should add an item to the list", ( done ) => {
  const NEWTODO_INPUT = ".new-todo";
  browser
    .refresh()
    .wait( NEWTODO_INPUT )
    // type a todo and press ENTER
    .type( NEWTODO_INPUT, "watch GoT" )
    .type( NEWTODO_INPUT, '\u000d')
    // wait until the list receives the item
    .wait( ".todo-list li" )
    // get the number of available items
    .evaluate(() => {
      return document.querySelectorAll( ".todo-list li" ).length;
    })
    .then(( res ) => {
      expect( res ).to.eql( 1 );
      done();
    }).catch( onError );
});


it( "should remove an item from the list", ( done ) => {
  const REMOVE_BTN = "button.destroy";
  browser
    // click of the first item fo the list
    .click( ".todo-list li:first-child " + REMOVE_BTN )
    // wait until the list is hidden (happens when it gets empty)
    .wait(() => {
      return document.querySelector( ".main" ).style.display === "none";
    })
    .evaluate(() => {
      return document.querySelectorAll( ".todo-list li" ).length;
    })
    .then(( res ) => {
      expect( res ).to.eql( 0 );
      done();
    }).catch( onError );
});

/*

const browser = new Nightmare({
  openDevTools: {
    mode: "detach"
  },
  show: true
});
*/