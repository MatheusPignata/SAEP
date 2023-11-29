const url = 'http://localhost:3000/professores';

const form = document.getElementById('form-login');

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let data = {
        "email": email,
        "senha": senha
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        console.log(res);
        return res.json();
    }).then(data => {
        console.log(data);
        if (data.length > 0) {
            localStorage.setItem('professor', JSON.stringify(data[0]));
            window.location.href = 'pages/main.html';
        } else {
            alert('Login inválido!');
        }
    }).catch(err => {
        console.log(err);
    });
    
})