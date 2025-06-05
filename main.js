// creo il click
// salvo elementi in variabili
const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('bottone');

bottone.addEventListener('click', function() {
    console.log('Cliccato!');
    lampadina.src = 'img/yellow_lamp.png';
});