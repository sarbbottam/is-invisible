const overflowScrollMarkup = `
  overflow: scroll (horizontal)
  <div class="wrapper o-s x">
    <div class="o-x">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>

  overflow: scroll (vertical)
  <div class="h-100 wrapper o-s y">
    <div class="o-y">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>
`;

const overflowScrollWrapperNode = document.createElement('div');
overflowScrollWrapperNode.innerHTML = overflowScrollMarkup;
document.body.appendChild(overflowScrollWrapperNode);
