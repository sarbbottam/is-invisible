const isInvisible = require('../src/.');

describe('is-invisible', () => {
  it('should return `true` for an non existent element', () => {
    assert.isTrue(isInvisible(document.createElement('div')));
  });

  it('should return `false` if the element is visible', () => {
    assert.isFalse(isInvisible(document.querySelector('div')));
  });

  it('should return `true` for invisible element - display:none', () => {
    assert.isTrue(isInvisible(document.querySelector('.d-n')));
  });

  it('should return `true` for invisible element - visibility:hidden', () => {
    assert.isTrue(isInvisible(document.querySelector('.v-h')));
  });

  it('should return `true` for invisible element - opacity:0', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-0')));
  });

  it('should return `true` for invisible element - overflow:hidden - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-h.x .inline-block:nth-child(3)')));
  });

  it('should return `true` for invisible element - overflow:scroll - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-s.x .inline-block:nth-child(3)')));
  });

  it('should return `true` for invisible element - overflow:auto - right', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-a.x .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:hidden - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-h.x .inline-block')));
  });

  it('should return `false` for visible element - overflow:scroll - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-s.x .inline-block')));
  });

  it('should return `false` for visible element - overflow:auto - horizontal', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-a.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - left', () => {
    document.querySelector('.o-h.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-h.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:scroll - left', () => {
    document.querySelector('.o-s.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-s.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:auto - left', () => {
    document.querySelector('.o-a.x').scrollLeft = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-a.x .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-h.y .inline-block:nth-child(3)')));
  });

  it('should return `true` for invisible element - overflow:scroll - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-s.y .inline-block:nth-child(3)')));
  });

  it('should return `true` for invisible element - overflow:auto - bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.o-a.y .inline-block:nth-child(3)')));
  });

  it('should return `false` for visible element - overflow:hidden - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-h.y .inline-block')));
  });

  it('should return `false` for visible element - overflow:scroll - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-s.y .inline-block')));
  });

  it('should return `false` for visible element - overflow:auto - vertical', () => {
    assert.isFalse(isInvisible(document.querySelector('.o-a.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:hidden - top', () => {
    document.querySelector('.o-h.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-h.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:scroll - top', () => {
    document.querySelector('.o-s.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-s.y .inline-block')));
  });

  it('should return `true` for invisible element - overflow:auto - top', () => {
    document.querySelector('.o-a.y').scrollTop = 500;
    assert.isTrue(isInvisible(document.querySelector('.o-a.y .inline-block')));
  });

  // add test cases for
  // position:relative - left/right/top/bottom
  // position:absolute - left/right/top/bottom
  // position:fixed - left/right/top/bottom

  // add test cases for
  // transform - left/right/top/bottom
  // transform - left/right/top/bottom
  // transform - left/right/top/bottom
});
