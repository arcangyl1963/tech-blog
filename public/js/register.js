const registerFormHandler = function(event) {
    event.preventDefault();

    const userName = document.querySelector('#username-register');
    const passWord = document.querySelector('#password-register');

    const response = await fetch('/api/user', {
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
        alert('Registration failed');
    }
};
document.querySelector('#registration-form').addEventListener('submit', registerFormHandler);