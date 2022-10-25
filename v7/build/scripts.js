/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  numAsString = parseInt(numAsString);
  if(numAsString < min || numAsString > max){
    return false;
  }
  return true;
}

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  let chooseCup = prompt (`Hvaða bolla veluru af ${numOfCups}?`);
  chooseCup = parseInt(chooseCup);

  while(true){
    if(!isNaN(chooseCup)){
      break;
    } else
    chooseCup = prompt(`Vinsamlegast veldu tölu milli 1 og ${numOfCups}`);
    }

    while(true){
      if(isValidNum(chooseCup,MIN_NUM_OF_CUPS-1, numOfCups)){
        break;
      } else
      chooseCup= prompt(`Hvaða bolla veluru af ${numOfCups}?`)
    }

    while(true){
      if(isValidNum(chooseCup,MIN_NUM_OF_CUPS-1, numOfCups)){
        break;
      } else
      chooseCup= prompt(`Vinsamlegast veldu tölu milli 1 og ${numOfCups}`)
    }

    let ballUnderCup = randomNumber(1, numOfCups);
    let pointsForCup = numOfCups-1;
    if(chooseCup === ballUnderCup){
      alert (`Rétt! Þú færð ${pointsForCup} stig!`);
      points += pointsForCup;
      won += 1;
      played +=1;
      return;
    } else
      alert (`Rangt, boltinn var i bolla nr ${ballUnderCup}`);
      played += 1;
      return;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);
const numberSemInt = parseInt(numOfCups);
    if (isNaN(numberSemInt)){
      console.error(`${numOfCups} er ekki löglegt gildi`)
      return ;
    }
    if (!isValidNum(numberSemInt, MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS)){
      console.error(`${numberSemInt} er ekki löglegt gildi`)
      return;
    }
    let byrja = getChoice(numOfCups);
    if (byrja ===1);

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
  } while (confirm(`Spila aftur?`))

}

/**
 * Birtir stöðu spilara.
 */
function games() {
  if(played ===0)
  console.log (`Þú hefur ekki spilað neina leiki.`)
  else
  console.log(`Leikir spilaðir: ${played}. Unnir leikir: ${won}. Stig: ${points}.`)
 }

