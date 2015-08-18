
var assert = require('assert');
var asbtract = require('..');

describe('Abstract', function(){
  it('should throw error when called', function(){

    assert.throws(asbtract, Error);

  });
});