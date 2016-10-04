const positionFixedMarkup = `
  position: fixed -ve top
  <div class="wrapper">
    <div class="inline-block p-f t--9999px">
      -ve top will not be visible
    </div>
  </div>

  position: fixed -ve bottom
  <div class="wrapper">
    <div class="inline-block p-f b--9999px">
      -ve bottom will not be visible
    </div>
  </div>

  position: fixed -ve left
  <div class="wrapper">
    <div class="inline-block p-f l--9999px">
      -ve left will not be visible
    </div>
  </div>

  position: fixed -ve right
  <div class="wrapper">
    <div class="inline-block p-f r--9999px">
      -ve right will not be visible
    </div>
  </div>
`;

const positionFixedWrapperNode = document.createElement('div');
positionFixedWrapperNode.innerHTML = positionFixedMarkup;
document.body.appendChild(positionFixedWrapperNode);
