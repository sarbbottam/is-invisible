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
