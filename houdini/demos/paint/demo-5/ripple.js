const ANIM_CLASS = '-animating';

const setPosition = (event, el) => {
  el.attributeStyleMap.set('--ripple-x', event.offsetX);
  el.attributeStyleMap.set('--ripple-y', event.offsetY);
};

const startAnimation = (event, el) => {
  setPosition(event, el);
  el.classList.add(ANIM_CLASS);
};

const stopAnimation = el => {
  el.classList.remove(ANIM_CLASS);
};

const setupElement = el => {
  const duration =
    CSSNumericValue.parse(getComputedStyle(el).getPropertyValue('--ripple-anim-duration')).to('ms').value || 1000;

  let timeout;

  el.addEventListener(
    'click',
    event => {
      stopAnimation(el);
      startAnimation(event, el);

      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => stopAnimation(el), duration);
    },
    false
  );
};

const installWorklet = async () => {
  await CSS.paintWorklet.addModule('ripple.paint-module.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then([].forEach.call(document.getElementsByClassName('js-ripple-el'), setupElement));
}
