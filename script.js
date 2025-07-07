document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');
  const existingButton = document.getElementById('existing');
  const form = document.getElementById('loginForm');

  // Check localStorage on load
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'inline-block';
  }

  // Form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    existingButton.style.display =
      localStorage.getItem('username') && localStorage.getItem('password')
        ? 'inline-block'
        : 'none';
  });

  // Existing user login
  existingButton.addEventListener('click', function () {
    const existingUsername = localStorage.getItem('username');
    if (existingUsername) {
      alert(`Logged in as ${existingUsername}`);
    }
  });
});
