global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
describe('Function filterData', () => {
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
  it('debería retornar el objeto Akali al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Assassin'), [{name: 'Akali', tags: 'Assassin'}] )
  })
  it('debería retornar el objeto Annie al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Mage'), [{name: 'Annie', tags: 'Mage'}] )
  });

})
