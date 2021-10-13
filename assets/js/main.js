// programma per stampare a schermo tutti i numeri da 1 a 100 distinguendo multipli di 3 e di 5

const numbersTable = document.getElementById('table');
console.log(numbersTable);

// ciclo per aggiungere numeri 1-100 ad html
for (let i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        const cell = `<li class"number_${i}">${'fizzbuzz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;
    } 
    
    else if (i % 3 == 0) {
        const cell = `<li class"number_${i}">${'fizz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;
    }

    else if (i % 5 == 0){
        const cell = `<li class"number_${i}">${'buzz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;
    }

    else {
        const cell = `<li class"number_${i}">${i}</li>`;
    console.log(cell);

    numbersTable.innerHTML += cell;
    }
}