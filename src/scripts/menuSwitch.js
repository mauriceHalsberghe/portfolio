function initMenuSwitch() {
    const $menuSwitch = document.querySelector('.switch--menu');  
    const $burgerIcon = document.querySelector('.switch__icon--burger');  
    const $crossIcon = document.querySelector('.switch__icon--cross');

    const $nav = document.querySelector('.nav');

    $crossIcon.classList.add('hidden');
    $nav.classList.add('nav--inactive');

    $nav.addEventListener('click', () => {
      $burgerIcon.classList.remove('hidden');
      $crossIcon.classList.add('hidden');
      $nav.classList.add('nav--inactive');
    });
  
    $menuSwitch.addEventListener('click', () => {
        
      if ($burgerIcon.classList.contains('hidden')) {
        $burgerIcon.classList.remove('hidden');
        $crossIcon.classList.add('hidden');
        $nav.classList.add('nav--inactive');
      } else {
        $burgerIcon.classList.add('hidden');
        $crossIcon.classList.remove('hidden');
        $nav.classList.remove('nav--inactive');
      }
    });
  
  }
  
  export default initMenuSwitch;