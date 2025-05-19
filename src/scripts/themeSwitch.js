function initThemeSwitch() {
  const $themeSwitch = document.querySelector('.switch--theme');  
  const $sunIcon = document.querySelector('.switch__icon--sun');  
  const $moonIcon = document.querySelector('.switch__icon--moon');  

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } 
  
  $themeSwitch.addEventListener('click', () => {
    let newTheme = '';
    
    if (document.body.classList.contains('dark-mode')) {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
  
    applyTheme(newTheme);
  });

  function applyTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      $sunIcon.classList.add('hidden');
      $moonIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      $moonIcon.classList.add('hidden');
      $sunIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'light');
    }
  }
}

export default initThemeSwitch;