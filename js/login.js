document.getElementById('login-button').addEventListener('click', function () {
    // get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    // check user email & password
    if (userEmail == 'sb@gmail.com' && userPassword == 'sb') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Not a valid user');
    }
})