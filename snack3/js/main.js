let somma = 0
for(let i = 0; i<10; i++)
{
    const ask = prompt("inserisci un numero")
    if(i%2 === 0){
        console.log("pari" + ask)
    }
    else{
        console.log("dispari" + ask)
        somma = somma + parseInt(ask)
    }
         
}
console.log(somma)