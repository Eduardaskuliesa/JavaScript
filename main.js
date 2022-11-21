// Sukūrusa funkciją, reikia įrodyti, jog ji veikia gerai skirtingais atvejais, todėlprivalote pateikti
//  mažiausiai 2 funkcijos panaudojimo pavyzdžius.

console.group('1. Parašykite funkciją, kuri atspausdintų bet kokį string"ą 2 kartus, skirtingose eilutėse');
{
  // funkcijos deklaracija
function printStringTwoTimes(text , n){
    const textWithSpace = text + "\n"
    const textTwoTimes = textWithSpace.repeat(n);
    console.log(textTwoTimes);
}

  // bandomieji kintamieji
const str1 = 'labas'
const n = 2

  // rezultatų spausdinimas 
printStringTwoTimes(str1 , 2);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžintų bet kokį string"ą 5 kartus, atskirtus tarpu');
{
  // funkcijos deklaracija

  // bandomieji kintamieji

  // funkcijos iškvietimai ir saugojimai į rezultatus

  // rezultatų spausdinimas 

}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdintų bet kokį string"ą, bet kokį kiekį kartų, askirtus tarpu - vienoje eilutėje');
{
  // funkcijos deklaracija

  // bandomieji kintamieji

  // rezultatų spausdinimas 
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdintų bet kokį string"ą, bet kokį kiekį kartų, askirtus programuotojo nurodytu simboliu - vienoje eilutėje');
{
  // funkcijos deklaracija

  // bandomieji kintamieji

  // rezultatų spausdinimas 
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri grąžintų bet kokį string"ą, bet kokį kiekį kartų, askirtus programuotojo nurodytu simboliu - vienoje eilutėje');
{
  // funkcijos deklaracija

  // bandomieji kintamieji

  // funkcijos iškvietimai ir saugojimai į rezultatus

  // rezultatų spausdinimas 
}
console.groupEnd();