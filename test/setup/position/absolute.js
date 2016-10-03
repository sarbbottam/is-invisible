const positionAbsoluteMarkup = `
  position: absolute -ve top
  <div class="wrapper">
    <div class="inline-block p-a t--9999px">
      -ve top will not be visible
    </div>
  </div>

  position: absolute -ve bottom
  <div class="wrapper">
    <div class="inline-block p-a b--9999px">
      -ve bottom will be visible
    </div>
  </div>

  position: absolute -ve left
  <div class="wrapper">
    <div class="inline-block p-a l--9999px">
      -ve left will not be visible
    </div>
  </div>

  position: absolute -ve right
  <div class="wrapper">
    <div class="inline-block p-a r--9999px">
      -ve right will be visible
    </div>
  </div>
`;

const positionAbsoluteWrapperNode = document.createElement('div');
positionAbsoluteWrapperNode.innerHTML = positionAbsoluteMarkup;
document.body.appendChild(positionAbsoluteWrapperNode);
