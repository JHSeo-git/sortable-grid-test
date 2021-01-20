const widgetBoxes = [...document.querySelectorAll('.widget-main__column')];

function sortableInit() {
  if (Sortable) {
    widgetBoxes.map((widgetBox) => {
      new Sortable(widgetBox, {
        group: 'widget',
        float: true,
        swap: true,
        swapThreshold: 0.5,
        handle: '.handle',
        animation: 150,
        ghostClass: 'sortable-ghost',
        swapClass: 'sortable-swap',
        forceFallback: true,
        fallbackClass: 'sortable-fallback',
        fallbackTolerance: 50,
      });
      console.log(widgetBox, '   init');
    });
  }
}

function init() {
  sortableInit();
}

window.addEventListener('load', init);
