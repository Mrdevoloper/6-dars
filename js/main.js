

var elForm = document.querySelector("#currency_form");
var elInputAmound = document.querySelector("#input_amound");
var elSelectType = document.querySelector("#select_currency_type");

var elResult = document.querySelector("#result_amound");

var UZS_TO_USD = 10750;
var UZS_TO_RUB = 145;
var UZS_TO_EUR = 11800;





elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    var inputAmound = elInputAmound.value;
    var selectType = elSelectType.value;
    
    if (selectType == "usd") {
        result =Math.ceil ( inputAmound / UZS_TO_USD);
        elResult.textContent =  result
    }

    if (selectType == "rub") {
        result = Math.ceil  (inputAmound / UZS_TO_RUB);
        elResult.textContent = result
    }

    if (selectType == "eur") {
        result = Math.ceil (inputAmound / UZS_TO_EUR);
        elResult.textContent = result
    }
});