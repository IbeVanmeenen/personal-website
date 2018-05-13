const installWorklet = async () => {
  await CSS.paintWorklet.addModule('circle-1.paint-module.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then(() => {});
}
