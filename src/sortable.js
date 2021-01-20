const gridDemo = document.getElementById('gridDemo');

function sortableInit() {
  if (Sortable) {
    new Sortable(gridDemo, {
      float: true,
      swap: true,
      swapThreshold: 0.3,
      handle: '.handle',
      animation: 150,
      ghostClass: 'blue-background-class',
      swapClass: 'swap-highlight-class',
      forceFallback: true,
      fallbackClass: 'sortable-fallback',
      fallbackTolerance: 50,
      onMove: function (evt, originalEvt) {
        console.log(evt);
        console.log(originalEvt);
      },
    });
    console.log('>> Sortable.js init success');
  } else {
    console.log('>> Sortable.js init fail');
  }
}

function init() {
  sortableInit();
}

window.addEventListener('load', init);
