const loginFormHandler = async function(event) {
    event.preventDefault();

    const userName = document.querySelector('#username-login');
    const passWord = document.querySelector('#password-login');

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: userName.value,
            password: passWord.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location('/dashboard');
    } else {
        alert('Login failed');
    }
};
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);