const isInvisible = require('../../src/.');

describe('is-invisible - overflow', () => {
  it('should return `true` for invisible element - overflow:scroll - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-s.x .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:scroll - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-s.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:scroll - left', () => {
    document.querySelector('.o-s.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-s.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:scroll - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-s.y .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:scroll - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-s.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:scroll - top', () => {
    document.querySelector('.o-s.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-s.y .inline-block')));
  });
});
