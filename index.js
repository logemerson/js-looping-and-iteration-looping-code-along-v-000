function writeCards(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log([`Thanks ${namesArray[i]}!`, `Thank you ${namesArray[i]}`, `Thanks so much ${namesArray[i]}`]);
  }
}