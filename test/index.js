const isInvisible = require('../src/.');

describe('is-invisible', () => {
  it('should return `true` for an non existent element', () => {
    assert.isTrue(
      isInvisible(
        document.createElement('div')
      )
    );
  });

  it('should return `false` if the element is visible', () => {
    assert.isFalse(
      isInvisible(
        document.querySelector('div')
      )
    );
  });

  it('should return `true` for invisible element - display:none', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.d-n.target')
      )
    );
  });

  it('should return `true` for invisible element - visibility:hidden', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.v-h.target')
      )
    );
  });

  it('should return `true` for invisible element - opacity:0', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-0.target')
      )
    );
  });

  it('should return `true` for invisible element - overflow:hidden - right', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-h .o-x-c .target')
      )
    );
  });

  it('should return `true` for invisible element - overflow:scroll - right', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-s .o-x-c .target')
      )
    );
  });

  it('should return `true` for invisible element - overflow:auto - right', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-a .o-x-c .target')
      )
    );
  });

  // add test cases for
  // overflow:hidden - left
  // overflow:scroll - left
  // overflow:auto - left

  it('should return `true` for invisible element - overflow:hidden - bottom', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-h .o-y-c .target')
      )
    );
  });

  it('should return `true` for invisible element - overflow:scroll - bottom', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-s .o-y-c .target')
      )
    );
  });

  it('should return `true` for invisible element - overflow:auto - bottom', () => {
    assert.isTrue(
      isInvisible(
        document.querySelector('.o-a .o-y-c .target')
      )
    );
  });

  // add test cases for
  // overflow:hidden - top
  // overflow:scroll - top
  // overflow:auto - top

  // add test cases for
  // position:relative - left/right/top/bottom
  // position:absolute - left/right/top/bottom
  // position:fixed - left/right/top/bottom

  // add test cases for
  // transform - left/right/top/bottom
  // transform - left/right/top/bottom
  // transform - left/right/top/bottom
});
