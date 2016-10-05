const isInvisible = require('../../src/.');

describe('is-invisible - overflow', () => {
  it('should return `true` for invisible element - overflow:auto - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-a.x .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:auto - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-a.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:auto - left', () => {
    document.querySelector('.o-a.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-a.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:auto - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-a.y .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:auto - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-a.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:auto - top', () => {
    document.querySelector('.o-a.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-a.y .inline-block')));
  });
});
