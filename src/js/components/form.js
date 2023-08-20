const footerValidation = new JustValidate('.footer__form', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D52B1E',
  },
});

footerValidation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Поле должно содержать минимум :value символов',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Поле должно содержать максимум :value символов',
    },
    {
      rule: 'customRegexp',
      value: '^[a-zA-Zа-яА-Я -]+$',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Пожалуйста, введите действительный e-mail',
    },
  ])
  .addField('#agree', [
    {
      rule: 'required',
      errorMessage: 'Обязательное согласие',
    },
  ])
  .addField('#text', [
    {
      rule: 'required',
      errorMessage: 'Поле не может быть пустым',
    },
  ])
