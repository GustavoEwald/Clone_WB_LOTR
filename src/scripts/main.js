document.addEventListener('DOMContentLoaded', function(){
  const hamburger_menu = document.querySelector('.header__navbar__dropdown');
  const hamburger_btn = document.querySelector('.menu-hamburger');
  const search_btn = document.querySelector('.header__navbar__search-btn');
  const search_box = document.querySelector('.header__navbar__search-input');
  const search_icon = document.querySelector('.search-btn-icon');
  const input_icon = document.querySelector('.input-icon');
  const menu_icon = document.querySelector('.menu-icon');

  hamburger_btn.addEventListener('click', function(e){
    e.preventDefault;

    if(hamburger_menu.classList.contains('header__navbar__dropdown--open')){
      hamburger_menu.classList.remove('header__navbar__dropdown--open');
      menu_icon.classList.remove('fa-xmark');
      search_box.classList.remove('header__navbar__search-input--active');
      search_icon.classList.add('fa-magnifying-glass');
      search_icon.classList.remove('fa-xmark');
      menu_icon.classList.add('fa-bars');
    }
    else{
      hamburger_menu.classList.add('header__navbar__dropdown--open');
      menu_icon.classList.add('fa-xmark');
      search_icon.classList.remove('fa-bars');
    }

  })

  search_btn.addEventListener('click', function(e){
    e.preventDefault;
    console.log('apertado')

    if(search_box.classList.contains('header__navbar__search-input--active')){
      console.log('tinha');
      search_box.classList.remove('header__navbar__search-input--active');
      search_icon.classList.add('fa-magnifying-glass');
      search_icon.classList.remove('fa-xmark');
      input_icon.classList.remove('input-icon--active')
    }
    else{
      console.log('n tinha');
      search_box.classList.add('header__navbar__search-input--active');
      search_icon.classList.add('fa-xmark');
      search_icon.classList.remove('fa-magnifying-glass');
      input_icon.classList.add('input-icon--active')
    }

  })
})