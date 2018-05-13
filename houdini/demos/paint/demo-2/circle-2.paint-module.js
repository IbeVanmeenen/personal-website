registerPaint(
  'circle-2',
  class {
    static get inputProperties() {
      return ['--circle-color'];
    }

    paint(ctx, size, properties) {
      const fill = properties.get('--circle-color');
      const x = size.width / 2;
      const y = size.height / 2;
      const radius = Math.min(x, y);

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
);
