const ANIM_DURATION = 1000;
const ANIM_CLASS = '-animating';

const setPosition = (event, el) => {
  const x = event.offsetX;
  const y = event.offsetY;

  el.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y};`;
};

const startAnimation = (event, el) => {
  setPosition(event, el);
  el.classList.add(ANIM_CLASS);
};

const stopAnimation = el => {
  el.classList.remove(ANIM_CLASS);
};

const setupElement = el => {
  let timeout;

  el.addEventListener(
    'click',
    event => {
      stopAnimation(el);
      startAnimation(event, el);

      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => stopAnimation(el), ANIM_DURATION);
    },
    false
  );
};

const installWorklet = async () => {
  await CSS.paintWorklet.addModule('./js/ripple-worklet.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then(() => {
    [].forEach.call(document.getElementsByClassName('js-ripple-el'), setupElement);
  });
}
