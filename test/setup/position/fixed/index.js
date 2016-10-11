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

  position: fixed 0 top
  <div class="wrapper">
    <div class="inline-block p-f t-0px">
      0 top will be visible
    </div>
  </div>

  position: fixed 0 bottom
  <div class="wrapper">
    <div class="inline-block p-f b-0px">
      0 bottom will be visible
    </div>
  </div>

  position: fixed 0 left
  <div class="wrapper">
    <div class="inline-block p-f l-0px t-0px">
      0 left will be visible
    </div>
  </div>

  position: fixed 0 right
  <div class="wrapper">
    <div class="inline-block p-f r-0px b-0px">
      0 right will be visible
    </div>
  </div>

`;

const positionFixedWrapperNode = document.createElement('div');
positionFixedWrapperNode.innerHTML = positionFixedMarkup;
document.body.appendChild(positionFixedWrapperNode);
