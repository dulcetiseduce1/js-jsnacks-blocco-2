// 10 volte un numero
// somma i numeri
let somma = 0
for(let i = 0; i<10; i++)
{
    const ask = prompt("inserisci un numero")
    listaNumeri.push(parseInt(ask))
    somma = somma + parseInt(ask) 
}
console.log(somma)