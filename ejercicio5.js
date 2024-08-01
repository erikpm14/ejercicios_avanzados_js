function rollDice(numFaces) {

    const result = Math.floor(Math.random() * numFaces) + 1;

    return result;
  }
  

  console.log(rollDice(6));
  console.log(rollDice(200));
  console.log(rollDice(40));
  console.log(rollDice(8)); 