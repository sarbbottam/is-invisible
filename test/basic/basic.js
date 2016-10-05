const isInvisible = require('../../src/.');

describe('is-invisible - basic', () => {
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
});
