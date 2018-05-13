if (CSS.registerProperty) {
  CSS.registerProperty({
    name: '--circle-color',
    syntax: '<color>',
    inherits: false,
    initialValue: 'rgba(255, 255, 255, .5)'
  });

  CSS.registerProperty({
    name: '--circle-x',
    syntax: '<number>',
    inherits: false,
    initialValue: 0
  });

  CSS.registerProperty({
    name: '--circle-y',
    syntax: '<number>',
    inherits: false,
    initialValue: 0
  });
}
