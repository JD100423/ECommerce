const form = document.querySelector("[data-form]");

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const response = await fetch('http://localhost:3000/usuarios');
    const users = await response.json();

    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Credenciales incorrectas');
    }

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '../screens/index.html';
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
