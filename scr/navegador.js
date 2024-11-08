
let heroi = prompt("Digite seu nick");
let xp = parseInt(prompt("Digite seu Nível de XP")); 

if (xp <= 1001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Ferro!");
} else if (xp <= 2001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível bronze!");
} else if (xp <= 3001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Prata!");
} else if (xp <= 4001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Ouro!");
} else if (xp <= 5001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Platina!");
} else if (xp <= 6001){
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Ascendente!");
} else if (xp <= 7001){ 
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Imortal!");
} else {
  console.log(" O Herói " + heroi + " tem " + xp + "xp e é nível Radiante!");
}