function findArrayIndex(array, text) {

    for (let i = 0; i < array.length; i++) {

      if (array[i] === text) {

        return i;
      }
    }

    return -1;
  }

;

console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Yoda"));


//PARTE 2

function removeItem(array, text) {

    const index = findArrayIndex(array, text);
    

    if (index !== -1) {

      array.splice(index, 1);
    }
  

    return array;
  }
  
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];