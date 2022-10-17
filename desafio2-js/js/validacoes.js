window.onload = function () {
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const login = document.querySelector('#login')
    let validacao = false
    let users = [
        { "user": "gustavo", "senha": "123" }
    ]

    login.addEventListener('click', function() {
        let userInput = username.value
        let passwordInput = password.value

        validacao = false
        for (let item of users) {
            if (item["user"] == userInput.trim() && item["senha"] == passwordInput.trim()) {
                validacao = true
                window.location.href = './panel.html'
            }
        }
        if (validacao === false) {
            alert("Usuário ou senha errados")
        }
    })
}
