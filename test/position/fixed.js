const isInvisible = require('../../src/.');

describe('is-invisible - position - fixed', () => {
  it('should return `true` for -ve top', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-f.t--9999px')));
  });

  it('should return `true` for -ve bottom', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-f.b--9999px')));
  });

  it('should return `true` for -ve left', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-f.l--9999px')));
  });

  it('should return `true` for -ve right', () => {
    assert.isTrue(isInvisible(document.querySelector('.p-f.r--9999px')));
  });
});
