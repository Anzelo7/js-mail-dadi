console.log('JS OK')

//due giocatori
let utente = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

console.log(utente)
console.log(computer)
//n casuale da 1/6

if (utente > computer) {
    document.getElementById('dado').innerHTML = 'Winner utente'
} else if (computer > utente) {
    document.getElementById('dado').innerHTML = 'Winner computer'
} else {
    document.getElementById('dado').innerHTML = 'Draw'
}
