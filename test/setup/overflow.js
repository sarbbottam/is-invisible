const overflowStyle = `
  .o-h {
    overflow: hidden !important;
  }

  .o-s {
    overflow: scroll !important;
  }

  .o-a {
    overflow: auto !important;
  }

  .o-x {
    width: 500px !important;
  }
`;

const overflowStyleNode = document.createElement('style');
overflowStyleNode.innerHTML = overflowStyle;
document.head.appendChild(overflowStyleNode);

const overflowMarkup = `
  overflow: hidden (horizontal)
  <div class="wrapper o-h x">
    <div class="o-x">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>

  overflow: scroll (horizontal)
  <div class="wrapper o-s x">
    <div class="o-x">
      <div class="inline-block"></div>
      <div class="inline-block"></div>
      <div class="inline-block"></div>
    </div>
  </div>

  overflow: auto (horizontal)
  <div class="wrapper o-a x">
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

  overflow: scroll (vertical)
  <div class="h-100 wrapper o-s y">
    <div class="o-y">
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

const overflowWrapperNode = document.createElement('div');
overflowWrapperNode.innerHTML = overflowMarkup;
document.body.appendChild(overflowWrapperNode);
