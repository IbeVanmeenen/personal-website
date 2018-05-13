const installWorklet = async () => {
  await CSS.paintWorklet.addModule('circle-2.paint-module.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then(() => {});
}
