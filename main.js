const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('bottone');

function toggleLampadina() {
    if (bottone.innerHTML === 'Accendi') {
        lampadina.src = 'img/yellow_lamp.png';
        bottone.innerHTML = 'Spegni';
    } else {
        lampadina.src = 'img/white_lamp.png';
        bottone.innerHTML = 'Accendi';
    }
}

bottone.addEventListener('click', toggleLampadina);
