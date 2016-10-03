const commonStyle = `
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
`;

const commonStyleNode = document.createElement('style');
commonStyleNode.innerHTML = commonStyle;
document.head.appendChild(commonStyleNode);
