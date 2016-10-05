const overflowHiddenMarkup = `
  overflow: hidden (horizontal)
  <div class="wrapper o-h x">
    <div class="o-x">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>

  overflow: hidden (vertical)
  <div class="h-100 wrapper o-h y">
    <div class="o-y">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>
`;

const overflowHiddenWrapperNode = document.createElement('div');
overflowHiddenWrapperNode.innerHTML = overflowHiddenMarkup;
document.body.appendChild(overflowHiddenWrapperNode);
