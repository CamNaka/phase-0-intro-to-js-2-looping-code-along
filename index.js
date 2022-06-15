const names = ["Guadalue", "Ollie", "Aki"];
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



