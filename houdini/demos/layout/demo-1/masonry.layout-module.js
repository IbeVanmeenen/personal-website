registerLayout(
  'masonry',
  class {
    static get inputProperties() {
      return ['--masonry-padding', '--masonry-columns'];
    }

    *layout(children, edges, constraints, properties) {
      const inlineSize = constraints.fixedInlineSize;

      const padding = parseInt(properties.get('--masonry-padding'));
      const columnValue = properties.get('--masonry-columns').toString();

      // We also accept 'auto', which will select the BEST number of columns.
      let columns = parseInt(columnValue);
      if (columnValue === 'auto' || !columns) {
        columns = Math.ceil(inlineSize / 350); // MAGIC NUMBER \o/.
      }

      // Layout all children with simply their column size.
      const childInlineSize = (inlineSize - (columns + 1) * padding) / columns;
      const childFragments = yield children.map(child => {
        return child.layoutNextFragment({ fixedInlineSize: childInlineSize });
      });

      let autoBlockSize = 0;
      const columnOffsets = Array(columns).fill(0);

      childFragments.forEach(childFragment => {
        // Select the column with the least amount of stuff in it.
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
