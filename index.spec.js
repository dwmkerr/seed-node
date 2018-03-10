const { expect } = require('chai');
const index = require('./index');

describe('index', () => {
  it('should export an add function', () => {
    expect(index.add).to.be.a('function');
  });
});
