import Vibrant from 'node-vibrant'

window.addEventListener('load', () => {
  let $btnNav         = $('.header__btn-nav'),
      $navContainer   = $('.header__nav'),
      $content        = $('.content'),
      $heroBg         = $('.hero__bg-img'),
      bookImgSrc      = document.querySelector('.hero__book-img').src,
      dominantColors;

  let v = new Vibrant(bookImgSrc);
  v.getPalette((err, palette) => {
    console.log( palette );
    dominantColors = [...palette.Vibrant._rgb];
    $heroBg.css("fill", `rgba(${dominantColors}, 1.00)`);
  });

  function toggleNav() {
    $($navContainer).toggleClass('show');
    $($content).toggleClass('blur');
  }

  $($content).on('click', (e) => {
    if(e.currentTarget.classList.contains('blur')) {
      e.preventDefault();
      toggleNav();
    }
  });


  $($btnNav).on('click', () => {
    toggleNav();
  })
});
