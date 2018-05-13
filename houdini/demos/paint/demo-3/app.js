const setPosition = (event, el) => {
  const x = event.offsetX;
  const y = event.offsetY;

  el.style.cssText = `--circle-x: ${x}; --circle-y: ${y};`;
};

const setupElement = el => {
  el.addEventListener(
    'click',
    event => {
      setPosition(event, el);
    },
    false
  );
};

const installWorklet = async () => {
  await CSS.paintWorklet.addModule('circle.paint-module.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then(() => {
    [].forEach.call(document.getElementsByClassName('js-circle-btn'), setupElement);
  });
}
