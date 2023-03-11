document.getElementById('btn-submit').addEventListener('click', function () {
    // input field er jonno sob somoy value use korte hobe//
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE//

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Tor password mone nai.tore ami bonchito korlam');
    }
})