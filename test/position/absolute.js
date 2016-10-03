const isInvisible = require('../../src/.');

describe('is-invisible - position - absolute', () => {
  it('should return `true` for -ve top', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-a.t--9999px')));
  });

  it('should return `false` for -ve bottom', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-a.b--9999px')));
  });

  it('should return `true` for -ve left', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-a.l--9999px')));
  });

  it('should return `false` for -ve right', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-a.r--9999px')));
  });
});
