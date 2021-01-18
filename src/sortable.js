const gridDemo = document.getElementById('gridDemo');

function sortableInit() {
  if (Sortable) {
    new Sortable(gridDemo, {
      animation: 150,
      ghostClass: 'blue-background-class',
    });
    console.log('>> Sortable.js init success');
  }
}

function init() {
  sortableInit();
}

window.addEventListener('load', init);
