let openSearch = document.querySelector('.search__btn');
let searchForm = document.querySelector('.search__form');
let closeBtn = document.querySelector('.search__close-btn');

openSearch.addEventListener('click', function () {
  searchForm.classList.add('search__form--active');
  this.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  searchForm.classList.remove('search__form--active');
  openSearch.classList.remove('active')
});
