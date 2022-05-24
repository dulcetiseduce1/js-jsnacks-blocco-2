var nomi=["marius","marco","mirko","ivan","sabbo"]
var cognomi=["piripicchio","bellopede","angelo","maria","pacciani"]

for(let i = 0; i<5; i++){
var randName = nomi[Math.floor(Math.random() * nomi.length)]
var randCognomi = cognomi[Math.floor(Math.random() * cognomi.length)]
console.log(randName +' '+ randCognomi)
}
