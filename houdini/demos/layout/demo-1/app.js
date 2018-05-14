const installWorklet = async () => {
  await CSS.layoutWorklet.addModule('masonry.layout-module.js');
};

if ('layoutWorklet' in CSS) {
  installWorklet().then(() => {});
}
