const positionMarkup = `
  position: relative -ve top
  <div class="wrapper">
    <div class="inline-block p-r t--9999px">
      -ve top will not be visible
    </div>
  </div>

  position: relative -ve bottom
  <div class="wrapper">
    <div class="inline-block p-r b--9999px">
      -ve bottom will be visible
    </div>
  </div>

  position: relative -ve left
  <div class="wrapper">
    <div class="inline-block p-r l--9999px">
      -ve left will not be visible
    </div>
  </div>

  position: relative -ve right
  <div class="wrapper">
    <div class="inline-block p-r r--9999px">
      -ve right will be visible
    </div>
  </div>
`;

const positionWrapperNode = document.createElement('div');
positionWrapperNode.innerHTML = positionMarkup;
document.body.appendChild(positionWrapperNode);
