const style = `
  .wrapper {
    border: 2px solid red;
    margin-bottom: 4px;
    width: 150px;
  }

  .block,
  .inline-block {
    border: 1px solid black;
    height: 100px;
    width: 100px;
  }

  .inline-block {
    display: inline-block;
  }

  .h-100 {
    height: 100px;
  }

  .d-n {
    display: none;
  }

  .v-h {
    visibility: hidden;
  }

  .o-0 {
    opacity: 0;
  }

  .o-h {
    overflow: hidden;
  }

  .o-s {
    overflow: scroll;
  }

  .o-a {
    overflow: auto;
  }

  .o-x {
    width: 500px;
  }
`;

const styleNode = document.createElement('style');
styleNode.innerHTML = style;
document.head.appendChild(styleNode);

const markup = `
  display: none
  <div class="wrapper">
    <div class="inline-block d-n">
    </div>
  </div>

  visibility: hidden
  <div class="wrapper">
    <div class="inline-block v-h">
    </div>
  </div>

  opacity: 0
  <div class="wrapper">
    <div class="inline-block o-0">
    </div>
  </div>

  overflow: hidden (horizontal)
  <div class="wrapper o-h x">
    <div class="o-x">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
    </div>
  </div>

  overflow: scroll (horizontal)
  <div class="wrapper o-s x">
    <div class="o-x">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
    </div>
  </div>

  overflow: auto (horizontal)
  <div class="wrapper o-a x">
    <div class="o-x">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
    </div>
  </div>

  overflow: hidden (vertical)
  <div class="h-100 wrapper o-h y">
    <div class="o-y">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block target">
      </div>
    </div>
  </div>

  overflow: scroll (vertical)
  <div class="h-100 wrapper o-s y">
    <div class="o-y">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
    </div>
  </div>

  overflow: auto (vertical)
  <div class="h-100 wrapper o-a y">
    <div class="o-y">
      <div class="inline-block">
      </div>
      <div class="inline-block">
      </div>
      <div class="inline-block ">
      </div>
    </div>
  </div>
`;

// add cases  for position
// add cases  for trandform

const wrapperNode = document.createElement('div');
wrapperNode.innerHTML = markup;
document.body.appendChild(wrapperNode);
