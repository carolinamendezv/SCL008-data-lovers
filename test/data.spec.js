global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('Funcion filterData', () => {
  const data = [
    {
      name: 'Akali',
      tags: 'Assassin'
    },
    {
      name: 'Annie',
      tags: 'Mage'
    }
  ]
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
