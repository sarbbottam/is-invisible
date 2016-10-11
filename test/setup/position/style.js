const positionStyle = `
  .p-r {
    position: relative !important;
  }

  .p-a {
    position: absolute !important;
  }

  .p-f {
    position: fixed !important;
  }

  .t--9999px {
    top: -9999px;
  }

  .b--9999px {
    bottom: -9999px;
  }

  .l--9999px {
    left: -9999px;
  }

  .r--9999px {
    right: -9999px;
  }

  .t-0px {
    top: 0px;
  }

  .b-0px {
    bottom: 0px;
  }

  .l-0px {
    left: 0px;
  }

  .r-0px {
    right: 0px;
  }
`;

const positionStyleNode = document.createElement('style');
positionStyleNode.innerHTML = positionStyle;
document.head.appendChild(positionStyleNode);
