const style = `
  div {
    width: 100px;
  }

  .wrapper {
    border: 2px solid red;
    margin-bottom: 4px;
    width: 150px;
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

  .o-x-c {
    width: 500px;
  }

  .o-c-c {
    display: inline-block;
    border: 1px solid black;
  }
`;

const styleNode = document.createElement('style');
styleNode.innerHTML = style;
document.head.appendChild(styleNode);

const markup = `
  <div class="wrapper">
    display: none
    <div class="d-n h-100 target">
    </div>
  </div>

  <div class="wrapper">
    visibility: hidden
    <div class="v-h h-100 target">
    </div>
  </div>

  <div class="wrapper">
    opacity: 0
    <div class="o-0 h-100 target">
    </div>
  </div>

  <div class="wrapper o-h x">
    overflow: hidden (horizontal)
    <div class="o-x-c">
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100 target">
      </div>
    </div>
  </div>

  <div class="wrapper o-s x">
    overflow: hidden (horizontal)
    <div class="o-x-c">
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100 target">
      </div>
    </div>
  </div>

  <div class="wrapper o-a x">
    overflow: hidden (horizontal)
    <div class="o-x-c">
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100">
      </div>
      <div class="o-x-c-c o-c-c h-100 target">
      </div>
    </div>
  </div>

  <div class="wrapper o-h h-100 y">
    overflow: hidden (vertical)
    <div class="o-y-c">
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100 target">
      </div>
    </div>
  </div>

  <div class="wrapper o-s h-100 y">
    overflow: scroll (vertical)
    <div class="o-y-c">
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100 target">
      </div>
    </div>
  </div>

  <div class="wrapper o-a h-100 y">
    overflow: auto (vertical)
    <div class="o-y-c">
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100">
      </div>
      <div class="o-c-c h-100 target">
      </div>
    </div>
  </div>
`;

// add cases  for position
// add cases  for trandform

const wrapperNode = document.createElement('div');
wrapperNode.innerHTML = markup;
document.body.appendChild(wrapperNode);
