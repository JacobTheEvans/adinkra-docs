let genRandomIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

let getRandomSymbol = () => {
  const names = ["adinkrahene", "akofen", "akokonan", "akoma-ntoso", "ananse-ntontan", "asase-ye-duru", "fihankra", "aya", "fofo", "bese-saka", "funtunfunefu", "gye-nyame", "bi-nka-bi", "boa-me-na-me-mmoa-wo", "hwe-mu-dua", "hye-won-hye", "dame-dame", "denkyem", "kete-pa", "kintinkantan", "duafe", "dwennimmen", "eban", "epa", "ese-ne-tekrema", "fawohodie", "kwatakye-atiko", "nsaa", "owuo-atwedee", "pempamsie", "nsoromma", "mate-masie", "me-ware-wo", "sankofa", "nyame-biribi-wo-soro", "sesa-wo-suban", "nyame-dua", "mframadan", "mmere-dane", "nyame-nnwu-na-mawu", "tamfo-bebre", "war-hor", "nyame-nti", "mmusuyidee", "mpatopo", "nyame-ye-ohene", "wawa-aba", "wo-nsa-da-mu-a", "nyansapo", "mpuannum", "nea-onnim-no-sua-a-oh", "odo-nnyew-fie-kwan", "woforo-dua-pa-a", "okodee-mmowere", "nea-ope-se-obedi-hene", "nkonsonkonson", "onyankopon-adom-nti-biribiara-beye-yie", "osram-ne-nsoromma", "nkyimu", "nkyinkyim", "owo-foro-adobe"];
  return names[genRandomIntInRange(0, names.length)];
}


let genRandomSymbols = (amount) => {
  let result = [];
  for(var i = 0; i < amount; i++) {
    let temp = getRandomSymbol();
    if(result.indexOf(result) === -1) {
      result.push(temp);
    }
  }
  return result;
}

export default genRandomSymbols;
