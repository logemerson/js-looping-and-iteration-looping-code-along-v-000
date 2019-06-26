function writeCards(namesArray) {
  let message = [];
  
  for (let i=0; i < namesArray.length; i++){
    message.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);s
  }
  return message;
}

function countdown(num){
  for (num, num >= 0, num--){
    console.log(num);
  }
}