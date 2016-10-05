const basicStyle = `
  .d-n {
    display: none !important;
  }

  .v-h {
    visibility: hidden !important;
  }

  .o-0 {
    opacity: 0 !important;
  }
`;

const basicStyleNode = document.createElement('style');
basicStyleNode.innerHTML = basicStyle;
document.head.appendChild(basicStyleNode);

const basicMarkup = `
  display: none
  <div class="wrapper">
    <div class="inline-block d-n"></div>
  </div>

  visibility: hidden
  <div class="wrapper">
    <div class="inline-block v-h"></div>
  </div>

  opacity: 0
  <div class="wrapper">
    <div class="inline-block o-0"></div>
  </div>
`;

const basicWrapperNode = document.createElement('div');
basicWrapperNode.innerHTML = basicMarkup;
document.body.appendChild(basicWrapperNode);
