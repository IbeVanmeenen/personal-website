registerLayout(
  'masonry',
  class {
    static get inputProperties() {
      return ['--masonry-padding', '--masonry-columns'];
    }

    *intrinsicSizes() {}

    *layout(children, edges, constraints, properties) {
      const inlineSize = constraints.fixedInlineSize;

      const padding = properties.get('--masonry-padding').value;
      let columns = properties.get('--masonry-columns').value;

      if (columns === 'auto' || !columns) {
        columns = Math.ceil(inlineSize / 350);
      }

      const childInlineSize = (inlineSize - (columns + 1) * padding) / columns;
      const childFragments = yield children.map(child => {
        return child.layoutNextFragment({ fixedInlineSize: childInlineSize });
      });

      let autoBlockSize = 0;
      const columnOffsets = Array(columns).fill(0);

      childFragments.forEach(childFragment => {
        const min = columnOffsets.reduce(
          (acc, val, idx) => {
            if (!acc || val < acc.val) {
              return { idx, val };
            }

            return acc;
          },
          { val: +Infinity, idx: -1 }
        );

        childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
        childFragment.blockOffset = padding + min.val;

        columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
        autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
      });

      return { autoBlockSize, childFragments };
    }
  }
);
