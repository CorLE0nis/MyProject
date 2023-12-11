function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Отправка данных на сервер
    fetch('/registration_app/registration-endpoint/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
    })
    .then(response => response.json())
    .then(data => {
        // Обработка ответа от сервера
        console.log('Успешная регистрация:', data);
    })
    .catch(error => {
        console.error('Ошибка регистрации:', error);
    });
}S