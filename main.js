// creo il click

document.getElementById('bottone').addEventListener('click', function() {
    console.log('Cliccato!');
    document.getElementById('lampadina').src = 'img/yellow_lamp.png';
});