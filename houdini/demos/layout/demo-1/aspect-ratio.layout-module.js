registerLayout(
  'ratio',
  class {
    static get inputProperties() {
      return ['--aspect-ratio'];
    }

    *intrinsicSizes() {}

    *layout(children, edges, constraints, properties) {
      const ratio = properties.get('--aspect-ratio');

      const autoBlockSize = constraints.fixedInlineSize * ratio;

      return { autoBlockSize };
    }
  }
);
