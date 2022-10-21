function ValidarLogin() {
    fetch('usuario.json')
        .then((response) => response.json())
        .then((data) => {

            try {
                let username = document.getElementById("user").value;
                let password = document.getElementById("password").value;

                let validate = false;
                data["users"].forEach(user => {

                    if (user.user == username && user.pws == password) {
                        validate = true;
                        let form = document.getElementById('login');
                        form.action = "painel.html";
                        form.submit();
                    }
                }
                );

                if (validate) {
                    throw "Sucesso";
                }
                else {
                    throw "Credenciais Erradas";
                }
            } catch (erro) {
                console.log(erro);
                alert(erro);
            }
        })

}

