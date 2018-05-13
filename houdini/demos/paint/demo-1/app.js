const installWorklet = async () => {
  await CSS.paintWorklet.addModule('circle-worklet.js');
};

if ('paintWorklet' in CSS) {
  installWorklet().then(() => {
    console.log('circle worklet installed');
  });
}
