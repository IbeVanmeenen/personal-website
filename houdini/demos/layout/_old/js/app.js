const installWorklet = async () => {
  await CSS.layoutWorklet.addModule('./js/masonry-worklet.js');
};

if ('layoutWorklet' in CSS) {
  installWorklet();
}
