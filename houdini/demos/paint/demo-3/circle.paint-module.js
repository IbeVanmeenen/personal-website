registerPaint(
  'circle',
  class {
    static get inputProperties() {
      return ['--circle-color', '--circle-x', '--circle-y'];
    }

    paint(ctx, size, properties) {
      const fill = properties.get('--circle-color');
      const x = properties.get('--circle-x');
      const y = properties.get('--circle-y');
      const radius = Math.min(x, y);

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
);
