/**
 * Author:
 * Jason Farrell <jason@useallfive.com> (http://useallfive.com)
 * Sarbbottam Bandyopadhyay <sarbbottam@gmail.com> (https://sarbbottam.github.io/)
 */

'use strict';

function isInvisible(element, options) {
  let top;
  let bottom;
  let left;
  let right;
  let height;
  let width;

  if (typeof options === 'undefined') {
    top = element.offsetTop;
    bottom = top + element.offsetHeight;
    left = element.offsetLeft;
    right = left + element.offsetWidth;
    height = element.offsetHeight;
    width = element.offsetWidth;
  } else {
    top = options.top;
    bottom = options.bottom;
    left = options.left;
    right = options.right;
    height = options.height;
    width = options.width;
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
  if (getStyle(parentNode, 'overflow') === 'hidden' || getStyle(parentNode, 'overflow') === 'scroll') {
    // if element's offset is different from parentNode
    if (
      // if element is to the right of the parentNode
      left + VISIBLE_PADDING > parentNode.offsetWidth + parentNode.scrollLeft ||
      // if element is to the left of the parentNode
      left + width - VISIBLE_PADDING < parentNode.scrollLeft ||
      // if element is below the parentNode
      top + VISIBLE_PADDING > parentNode.offsetHeight + parentNode.scrollTop ||
      // if element is above the parentNode
      top + height - VISIBLE_PADDING < parentNode.scrollTop
    ) {
      // element is out of bounds, so its invisible
      return true;
    }
  }
  // add the parent's offset(Top/Left) to element's offset
  if (element.offsetParent === parentNode) {
    left += parentNode.offsetLeft;
    top += parentNode.offsetTop;
  }
  // recursively check upwards ...
  return isInvisible(parentNode, {top, bottom, left, right, height, width});
}

// cross browser get style
function getStyle(element, property) {
  if (window.getComputedStyle) {
    return document.defaultView.getComputedStyle(element, null)[property];
  }
  if (element.currentStyle) {
    return element.currentStyle[property];
  }
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
