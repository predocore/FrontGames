const titulo = document.getElementById("titulo");
const actionButton = document.getElementById("actionButton");
const button = document.getElementById("button");
const mensagem = document.getElementById("mensagem");

let isLogin = false;

button.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
        titulo.textContent = "Login";
        actionButton.textContent = "Entrar";
       
        button.textContent = "Não possui login? Registre-se";
    } else {
        titulo.textContent = "Registrar-se";
        actionButton.textContent = "Registrar";
       
        button.textContent = "Já possui cadastro? Login";
    }
});

actionButton.addEventListener("click", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome")?.value;
    let email = document.getElementById("email")?.value;
    let senha = document.getElementById("senha")?.value;

    if (!isLogin) {
        if (nome && email && senha) {
            localStorage.setItem("nome", nome);
            localStorage.setItem("email", email);
            localStorage.setItem("senha", senha);

            mensagem.textContent = "Registro feito com sucesso!";
            mensagem.style.color = "white";

            isLogin = true;
            titulo.textContent = "Login";
            actionButton.textContent = "Entrar";
            button.textContent = "Não possui login? Registre-se";
        } else {
            mensagem.textContent = "Informação inválida ou incompleta!";
            mensagem.style.color = "red";
        }
    } else {
        let emailSalvo = localStorage.getItem("email");
        let senhaSalva = localStorage.getItem("senha");

        if (email === emailSalvo && senha === senhaSalva) {
            mensagem.textContent = "Login efetuado com sucesso!";
            mensagem.style.color = "white";

            setTimeout(() => {
                window.location.href = "C:/FE-2025/index.html";
            }, 1500);
        } else {
            mensagem.textContent = "Login não efetuado!";
            mensagem.style.color = "red";
        }
    }
});