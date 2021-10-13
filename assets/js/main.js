// programma per stampare a schermo tutti i numeri da 1 a 100 distinguendo multipli di 3 e di 5

const numbersTable = document.getElementById('table');

// ciclo per aggiungere numeri 1-100 ad html
for (let i = 1; i < 101; i++) {

    // multipli di 15
    if (i % 3 == 0 && i % 5 == 0) {
        const cell = `<li class=" number_${i} multiple_15">${'fizzbuzz'}</li>`;

        numbersTable.innerHTML += cell;
    } 
    // multipli di 3
    else if (i % 3 == 0) {
        const cell = `<li class="number_${i} multiple_3">${'fizz'}</li>`;

        numbersTable.innerHTML += cell;
    }
    // multipli di 5
    else if (i % 5 == 0){
        const cell = `<li  class="number_${i} multiple_5">${'buzz'}</li>`;

        numbersTable.innerHTML += cell;
    }
    // numeri indivisibili per 3 e per 5
    else {
        const cell = `<li class="number_${i}">${i}</li>`;

    numbersTable.innerHTML += cell;
    }
}