// Configura a data do aniversário
const dataAniversario = new Date('November 15, 2024 16:00:00').getTime();

// Atualiza a contagem a cada segundo
const contador = document.getElementById('contador');
const interval = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataAniversario - agora;

    // Cálculos de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe a contagem regressiva
    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Se a contagem terminar
    if (distancia < 0) {
        clearInterval(interval);
        contador.innerHTML = "Feliz Aniversário!";
    }
}, 1000);

// Adiciona a função de confirmar presença
document.getElementById('confirmar').addEventListener('click', () => {
    alert('Presença confirmada! Mal posso esperar para comemorar!');
});
