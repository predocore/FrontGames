document.addEventListener('DOMContentLoaded', function () {

    const campoMensagem = document.getElementById('mensagem');
    const contador = document.getElementById('contador-caracteres');
    const limite = 1000;

    if (campoMensagem && contador) {

        campoMensagem.addEventListener('input', function () {
            const tamanhoAtual = campoMensagem.value.length;
            contador.textContent = `${tamanhoAtual} / ${limite} caracteres`;

            if (tamanhoAtual > limite) {
                contador.style.color = 'red';
            } else {
                contador.style.color = 'gray';
            }
        });
    }
});