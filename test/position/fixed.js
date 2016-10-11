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

  it('should return `false` for 0 top', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-f.t-0px')));
  });

  it('should return `false` for 0 bottom', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-f.b-0px')));
  });

  it('should return `false` for 0 left', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-f.l-0px')));
  });

  it('should return `false` for 0 right', () => {
    assert.isFalse(isInvisible(document.querySelector('.p-f.r-0px')));
  });
});
