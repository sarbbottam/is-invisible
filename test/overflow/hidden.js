const isInvisible = require('../../src/.');

describe('is-invisible - overflow', () => {
  it('should return `true` for invisible element - overflow:hidden - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-h.x .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:hidden - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-h.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - left', () => {
    document.querySelector('.o-h.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-h.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-h.y .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:hidden - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-h.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - top', () => {
    document.querySelector('.o-h.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-h.y .inline-block')));
  });
});
