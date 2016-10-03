const isInvisible = require('../../src/.');

describe('is-invisible - position - relative', () => {
  it('should return `true` for -ve top', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-r.t--9999px')));
  });

  it('should return `false` for -ve bottom', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-r.b--9999px')));
  });

  it('should return `true` for -ve left', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-r.l--9999px')));
  });

  it('should return `false` for -ve right', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-r.r--9999px')));
  });
});
