registerPaint(
  'ripple',
  class {
    static get inputProperties() {
      return ['--ripple-color', '--ripple-anim-tick', '--ripple-anim-duration', '--ripple-x', '--ripple-y'];
    }
    paint(ctx, size, properties) {
      const x = properties.get('--ripple-x');
      const y = properties.get('--ripple-y');
      const duration = properties.get('--ripple-anim-duration').to('ms').value;
      const tick = properties.get('--ripple-anim-tick');
      const rippleColor = properties.get('--ripple-color');

      ctx.fillStyle = rippleColor;
      ctx.globalAlpha = 1 - tick / duration;
      ctx.arc(x, y, size.width * tick / duration, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
);
