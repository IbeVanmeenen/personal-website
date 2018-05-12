if (CSS.registerProperty) {
  CSS.registerProperty({
    name: "--theme-color",
    syntax: "<color>",
    initialValue: "#fff",
    inherits: true
  });

  CSS.registerProperty({
    name: "--theme-background",
    syntax: "<color>",
    initialValue: "#454468",
    inherits: true
  });
}
