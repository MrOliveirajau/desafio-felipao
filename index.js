

let  nomeHeroi = 'Picachu'
let xpDoHeroi = 9500

if (xpDoHeroi <= 1000) {
    console.log('Ferro')

} else if (xpDoHeroi >=1001 && xpDoHeroi <= 2000) {
    console.log('Bronze')

} else if (xpDoHeroi >=2001 && xpDoHeroi <= 5000) {
    console.log('Prata')

} else if (xpDoHeroi >=5001 && xpDoHeroi <= 7000) {
    console.log('Ouro')

} else if (xpDoHeroi >=7001 && xpDoHeroi <= 8000) {
    console.log('Platina')

} else if (xpDoHeroi >=8001 && xpDoHeroi <= 9000) {
    console.log('Ascendente')

} else if (xpDoHeroi >=9001 && xpDoHeroi <= 10000) {
    console.log('Imortal')

} else { console.log('Radiante')}

console.log(`O herói de nome ${nomeHeroi} ' está no nível ${xpDoHeroi}`)