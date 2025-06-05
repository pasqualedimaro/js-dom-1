// Seleziono gli elementi dal dom
const imgLampadina = document.getElementById('lampadina');
const btnToggle = document.getElementById('bottone');

// Funzione per accendere/spegnere la lampadina
function toggleLampadina() {
    if (btnToggle.innerHTML === 'Accendi') {
        // Accendi la lampadina
        imgLampadina.src = 'img/yellow_lamp.png';
        btnToggle.innerHTML = 'Spegni';
    } else {
        // Spegni la lampadina
        imgLampadina.src = 'img/white_lamp.png';
        btnToggle.innerHTML = 'Accendi';
    }
}

// Aggiungo l'evento click al bottone
btnToggle.addEventListener('click', toggleLampadina);