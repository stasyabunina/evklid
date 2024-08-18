let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.work-card');

tabsBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => { btn.classList.remove('work__btn--active') });
    e.currentTarget.classList.add('work__btn--active');

    tabsItem.forEach((element) => { element.classList.remove('work-card--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-card--active');
  });
});
