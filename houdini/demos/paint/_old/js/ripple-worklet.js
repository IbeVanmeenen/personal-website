registerPaint(
  'ripple',
  class {
    static get inputProperties() {
      return ['--ripple-color', '--animation-tick', '--ripple-x', '--ripple-y'];
    }
    paint(ctx, size, properties) {
      const x = properties.get('--ripple-x');
      const y = properties.get('--ripple-y');
      const tick = properties.get('--animation-tick');
      const rippleColor = properties.get('--ripple-color');

      ctx.fillStyle = rippleColor;
      ctx.globalAlpha = 1 - tick / 1000;
      ctx.arc(x, y, size.width * tick / 1000, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
);
