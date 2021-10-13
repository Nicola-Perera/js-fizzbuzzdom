// programma per stampare a schermo tutti i numeri da 1 a 100 distinguendo multipli di 3 e di 5

const numbersTable = document.getElementById('table');
console.log(numbersTable);

// ciclo per aggiungere numeri 1-100 ad html
for (let i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        const cell = `<li id="multiple_15" class"number_${i} multiple_15">${'fizzbuzz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;
        
        document.querySelector('#multiple_15').style.backgroundColor = '#DE5471';
    } 
    
    else if (i % 3 == 0) {
        const cell = `<li id="multiple_3" class"number_${i}">${'fizz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;

        document.querySelector('#multiple_3').style.backgroundColor = '#61D2A4';
    }

    else if (i % 5 == 0){
        const cell = `<li id="multiple_5" class"number_${i}">${'buzz'}</li>`;
        console.log(cell);

        numbersTable.innerHTML += cell;

        document.querySelector('#multiple_5').style.backgroundColor = '#F9D277';
    }

    else {
        const cell = `<li class"number_${i}">${i}</li>`;
    console.log(cell);

    numbersTable.innerHTML += cell;
    }
}