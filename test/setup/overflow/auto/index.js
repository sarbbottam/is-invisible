const overflowAutoMarkup = `
  overflow: auto (horizontal)
  <div class="wrapper o-a x">
    <div class="o-x">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>

  overflow: auto (vertical)
  <div class="h-100 wrapper o-a y">
    <div class="o-y">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>
`;

const overflowAutoWrapperNode = document.createElement('div');
overflowAutoWrapperNode.innerHTML = overflowAutoMarkup;
document.body.appendChild(overflowAutoWrapperNode);
