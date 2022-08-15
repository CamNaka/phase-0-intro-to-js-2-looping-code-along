

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);



const names = ["Guadalue", "Ollie", "Aki"];
function writeCards(names, Event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + Event + " gift!")
    }
    return messages;
}



let num = 10;

function countDown(num){
  while (num >= 0){
    console.log(num--)
  }
}










































































/*const names = ["Guadalue", "Ollie", "Aki"];
function writeCards(names, Event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + Event + " gift!")
    }
    return messages;
}
//creates a message and pushes array elements into message(js)

let num = 10;
function countDown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}
//uses a while loop inside a function to "countDown" 10 to 0

*/

