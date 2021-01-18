const gridStackOption = {
  disableOneColumnMode: true,
  disableResize: true,
  float: true,
};

function gridStackInit() {
  if (GridStack) {
    const grid = GridStack.init(gridStackOption);

    grid.on('dragstart', function (event, el) {
      console.log(event, el);
    });
    console.log('>> grid stack init success');
  }
}

function init() {
  gridStackInit();
}

window.addEventListener('load', init);
