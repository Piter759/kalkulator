function obliczZysk(income, capital, years, percentage, tax) {
    
    var wplata = parseInt(income);
    var okresKapitalizacji = parseInt(capital);
    var iloscLat = parseInt(years);
    var oprocentowanie = parseInt(percentage)/100;
    var podatek = tax;
    podatek = document.getElementById("podatek").checked;
    
    if(podatek === true){
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    var power = iloscLat * okresKapitalizacji;
    var kapital = ((wplata*(Math.pow((1+(oprocentowanieOpodatkowane/okresKapitalizacji)), power)))*10)/10;
    
    kapital = parseFloat(kapital.toFixed(2));

    return kapital;
}

function oblicz(income, capital, years, percentage, tax) {
    
    var wplata = parseInt(income);
    var okresKapitalizacji = parseInt(capital);
    var iloscLat = parseInt(years);
    var oprocentowanie = parseInt(percentage)/100;
    var podatek = tax;
    podatek = document.getElementById("podatek").checked;
    var wynik = obliczZysk(income, capital, years, percentage, tax);

    document.getElementById('wynik').innerHTML = 'Wartość kwoty wraz z odsetkami wynosi: ' + wynik + ' PLN';
}

