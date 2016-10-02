/**
 * Author:
 * Jason Farrell <jason@useallfive.com> (http://useallfive.com)
 * Sarbbottam Bandyopadhyay <sarbbottam@gmail.com> (https://sarbbottam.github.io/)
 */

'use strict';

function isInvisible(element, options) {
  let height;
  let top;
  let bottom;
  let width;
  let left;
  let right;

  if (typeof options === 'undefined') {
    height = element.offsetHeight;
    top = element.offsetTop;
    bottom = top + height;
    width = element.offsetWidth;
    left = element.offsetLeft;
    right = left + width;
  } else {
    height = options.height;
    top = options.top;
    bottom = options.bottom;
    width = options.width;
    left = options.left;
    right = options.right;
  }

  const parentNode = element.parentNode;
  const VISIBLE_PADDING = 2;

  if (!elementInDocument(element)) {
    return true;
  }

  // return true for document node
  if (parentNode.nodeType === 9) {
    return false;
  }

  // return true if our element is invisible
  if (
    getStyle(element, 'opacity') === '0' ||
    getStyle(element, 'display') === 'none' ||
    getStyle(element, 'visibility') === 'hidden'
  ) {
    return true;
  }

  // if the parentNode can hide its children ...
  if (
    (
      getStyle(parentNode, 'overflow-x') === 'hidden' ||
      getStyle(parentNode, 'overflow-y') === 'hidden' ||
      getStyle(parentNode, 'overflow-x') === 'scroll' ||
      getStyle(parentNode, 'overflow-y') === 'scroll' ||
      getStyle(parentNode, 'overflow-x') === 'auto' ||
      getStyle(parentNode, 'overflow-y') === 'auto'
    ) && (
      // if element is above the parentNode
      top + height - VISIBLE_PADDING < parentNode.scrollTop ||

      // if element is below the parentNode
      top + VISIBLE_PADDING > parentNode.offsetHeight + parentNode.scrollTop + parentNode.offsetTop ||

      // if element is to the left of the parentNode
      left + width - VISIBLE_PADDING < parentNode.scrollLeft ||

      // if element is to the right of the parentNode
      left + VISIBLE_PADDING > parentNode.offsetWidth + parentNode.scrollLeft + parentNode.offsetLeft
    )
  ) {
    // if either of the above is true the element is not visible
    // element is out of bounds, so its invisible
    return true;
  }

  // add the parent's offset(Top/Left) to element's offset
  // this needs to be corrected.
  // if (element.offsetParent === parentNode) {
  //   left += parentNode.offsetLeft;
  //   top += parentNode.offsetTop;
  // }

  // recursively check upwards ...
  return isInvisible(parentNode, {top, bottom, left, right, height, width});
}

// cross browser get style
function getStyle(element, property) {
  return document.defaultView.getComputedStyle(element, null)[property];
}

function elementInDocument(element) {
  element = element.parentNode;
  while (element) {
    if (element === document) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}

module.exports = isInvisible;
