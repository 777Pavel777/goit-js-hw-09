const localStorageKey = 'feedback-form-state';

const formElements = document.querySelector('.feedback-form');
const userEmail = formElements.elements.email;
const userMessage = formElements.elements.message;

formElements.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const userInfo = {
    email: userEmail.value.trim(),
    message: userMessage.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userInfo));
}

//save info

const rowData = localStorage.getItem(localStorageKey);

if (rowData != null) {
  const data = JSON.parse(rowData);
  userEmail.value = data.email;
  userMessage.value = data.message;
}

// submit

formElements.addEventListener('submit', onClickBtn);

function onClickBtn(evt) {
  evt.preventDefault();
  const email = userEmail.value.trim();
  const message = userMessage.value.trim();

  if (email === '' || message === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  formElements.reset();
}
