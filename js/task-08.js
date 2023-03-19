
const login = document.querySelector('.login-form');

login.addEventListener('submit', event => {
  event.preventDefault();
  const datos = {};
  for (const element of login.elements) {
    if (element.name) {
      datos[element.name] = element.value;
    }
  }
  if (datos.email && datos.password) {
    console.log(datos);
    login.reset();
  } else {
    alert('campos vacios');
  }
});
