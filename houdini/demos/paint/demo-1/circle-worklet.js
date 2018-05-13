registerPaint(
  'circle',
  class {
    static get inputProperties() {}

    paint(ctx, size, properties) {
      const x = size.width / 2;
      const y = size.height / 2;
      const radius = Math.min(x, y);

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
);
