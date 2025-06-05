// creo il click
// salvo elementi in variabili
const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('bottone');

/*bottone.addEventListener('click', function() {
    console.log('Cliccato!');
    lampadina.src = 'img/yellow_lamp.png';
});*/

//devo fare anche lo spegnimento

bottone.addEventListener('click', function() {
    console.log('Cliccato!');
    // provo ad usare if

   if (bottone.innerHTML === 'Accendi') {
        lampadina.src = 'img/yellow_lamp.png';
        bottone.innerHTML = 'Spegni';
    } else {
        lampadina.src = 'img/white_lamp.png';
        bottone.innerHTML = 'Accendi';
    }
});
