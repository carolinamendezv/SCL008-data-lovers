global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterData', () => {
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
  
  it('debería retonar el string Akali al filtrar', () => {
    assert.equal(window.filterData(data,"Assassin"), [{name:'Akali',tags:'Assassin'}])
  });

  
})
