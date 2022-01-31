// Wir holen uns die argumente aus process.argv heraus.
const [ node, scripts, ...args] = process.argv;

// Wir holen uns den Kalkulationstyp und die nummern dynamisch als spread operator aus args.
const [ calcType, ...numbers ] = args;

// Wir erstellen eine variable fürs ergebnis und eine für den error state.
let result = 0;
let error = false;

// Wir erstellen eine funktion um die Summe zu bekommen.
const sum = (numArr) =>
{
    let arrResult = 0;

    numArr.forEach(num =>
    {
        arrResult += Number(num);
    });

    return arrResult;
}

// Wir erstellen eine methode um den durchschnitt zu bekommen
const avg = (numArr) =>
{
    return sum(numArr) / numArr.length;
}

const errNumber = numbers.find(input =>
{
    if(Number(input) >= 0 === false)
    {
        error = true;
        console.log(`Fehler: "${ input }" ist keine nummer!`)
    }
});

// Wir nutzen einen switch um anzugeben welchen kalkulationstyp wir nutzen, nit einem default für eine fehlerhafte eingabe,
switch(calcType)
{
    case "sum":
        result = sum(numbers);
        break;
    case "avg":
        result = avg(numbers);
        break;
    default:
        error = true;
        console.log(`Fehler: Kann ${ calcType } nicht berechnen...`);
        break;
}

// Wir geben, falls kein fehler auftrat, das ergebnis aus:
error === false && console.log("Ergebnis:", result);
