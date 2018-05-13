const root = document.documentElement;

const setTheme = (background, color) => {
  root.style.setProperty('--theme-color', color);
  root.style.setProperty('--theme-background', background);
};

const themeToggleBtn = document.getElementById('theme-toggle');

const switchTheme = e => {
  switch (e.target.value) {
    case 'dark':
      setTheme('#454468', '#fff');
      break;
    case 'light':
      setTheme('#fff', '#454468');
      break;
    case 'tomato':
      setTheme('tomato', '#fff');
      break;
    case 'broken':
      setTheme('thisIsNotAColor', 10);
      break;
  }
};

themeToggleBtn.addEventListener('change', switchTheme);

if (!CSS.registerProperty) {
  setTheme('#454468', '#fff');
}
