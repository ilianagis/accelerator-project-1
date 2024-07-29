export function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById('form-name');
  const phoneInput = document.getElementById('form-phone');

  let isValid = true;

  // проверка имени
  if (!nameInput.checkValidity()) {
    document.getElementById('name-error').style.display = 'block';
    document.getElementById('name-error').textContent = 'Введите корректное имя';
    nameInput.classList.add('error');
    isValid = false;
  } else {
    document.getElementById('name-error').textContent = '';
    nameInput.classList.remove('error');
  }

  // проверка телефона
  if (!phoneInput.checkValidity()) {
    document.getElementById('phone-error').style.display = 'block';
    document.getElementById('phone-error').textContent = 'Введите корректный номер телефона';
    phoneInput.classList.add('error');
    isValid = false;
  } else {
    document.getElementById('phone-error').textContent = '';
    phoneInput.classList.remove('error');
  }

  // если форма валидна, можно отправить ее
  if (isValid) {
    document.getElementById('free-lesson-form').submit();
  }
}
