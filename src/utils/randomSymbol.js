import metaData from "../metadata.js";

let getNames = () => {
  let names = [];
  for(var i = 0; i < metaData.length; i++) {
    names.push(metaData[i].name);
  }
  return names;
}

let genRandomIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

let getRandomSymbol = (names) => {
  return names[genRandomIntInRange(0, names.length)];
}


let genRandomSymbols = (amount) => {
  let result = [];
  let names = getNames();
  console.log(names);
  for(var i = 0; i < amount; i++) {
    let temp = getRandomSymbol(names);
    if(result.indexOf(result) === -1) {
      result.push(temp);
    }
  }
  return result;
}

export default genRandomSymbols;
