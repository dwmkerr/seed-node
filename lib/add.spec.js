const { expect } = require('chai');
const add = require('./add');

describe('add', () => {

  it('should throw if required parameters are missing', () => {
    expect(() => add(null, 2)).to.throw(/lhs/);
    expect(() => add(3, null)).to.throw(/rhs/);
  });

  it('should be able to add', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
