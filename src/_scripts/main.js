

window.addEventListener('load', () => {
  let $btnNav = $('.header__btn-nav'),
      $navContainer    = $('.header__nav-container')

  $($btnNav).on('click', () => {
    $($navContainer).toggleClass('show');
  })
});
