function convert() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("fromCurrency").value;
    var to = document.getElementById("toCurrency").value;
    var result;
    //chuyen sang vnd
    if (from === "txtVND" && to === "txtVND2") {
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "VND";
    }
    if (from === "txtUSD" && to === "txtVND2") {
        amount = amount * 23000;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "VND";
    }
    if (from === "txtEURO" && to === "txtVND2") {
        amount = amount * 26000;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "VND";
    }
    //chuyen sang USD
    if (from === "txtUSD" && to === "txtUSD2") {
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "USD";
    }
    if (from === "txtVND" && to === "txtUSD2") {
        amount = amount / 23000;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "USD";
    }
    if (from === "txtEURO" && to === "txtUSD2") {
        amount = amount * 1.1;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "USD";
    }
    //chuyen sang EURO
    if (from === "txtEURO" && to === "txtEURO2") {
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "EURO";
    }
    if (from === "txtVND" && to === "txtEURO2") {
        amount = amount/ 26000;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "EURO";
    }
    if (from === "txtUSD" && to === "txtEURO2") {
        amount = amount / 1.1;
        result = amount;
        document.getElementById("showConvert").innerHTML = result + "EURO";
    }
}