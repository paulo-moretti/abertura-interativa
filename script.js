// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');

    textElement.addEventListener('animationend', () => {
        // Redireciona para a página inicial após a animação
        window.location.href = 'pagina_inicial.html'; // Substitua pelo URL desejado
    });
});
