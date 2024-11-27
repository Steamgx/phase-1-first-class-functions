// Function that accepts a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  // Tests using Mocha and Chai
  const chai = require("chai");
  const spies = require("chai-spies");
  chai.use(spies);
  
  describe("index", () => {
    describe("receivesAFunction(callback)", () => {
      it("receives a function and calls it", () => {
        const spy = chai.spy();
  
        receivesAFunction(spy);
  
        expect(spy).to.have.been.called();
      });
    });
  
    describe("returnsANamedFunction()", () => {
      var fn;
  
      before(() => {
        fn = returnsANamedFunction();
      });
  
      it("returns a function", () => {
        expect(fn).to.be.a("function");
      });
  
      it("returns a named function", () => {
        expect(fn.name).not.to.eql(""); // Ensure the function has a name
      });
    });
  
    describe("returnsAnAnonymousFunction()", () => {
      var fn;
  
      before(() => {
        fn = returnsAnAnonymousFunction();
      });
  
      it("returns a function", () => {
        expect(fn).to.be.a("function");
      });
  
      it("returns an anonymous function", () => {
        expect(fn.name).to.eql(""); // Ensure the function doesn't have a name
      });
    });
  });
  