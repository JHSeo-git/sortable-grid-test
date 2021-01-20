const gridDemo = document.getElementById('gridDemo');

function sortableInit() {
  if (Sortable) {
    new Sortable(gridDemo, {
      float: true,
      swap: true,
      swapThreshold: 0.3,
      handle: '.handle',
      animation: 150,
      ghostClass: 'sortable-ghost',
      swapClass: 'sortable-swap',
      forceFallback: true,
      fallbackClass: 'sortable-fallback',
      fallbackTolerance: 50,
      onMove: function (evt, originalEvt) {
        console.dir(evt.dragged);
        console.log(evt.related);
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
