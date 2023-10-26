const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5
    const euroToday = 5.27
    const libraToday = 6.4


    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("eu-EU", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "IB"
        }).format(inputCurrencyValue / libraToday)
    }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changecurrency() {
    const currencyDolar = document.getElementById("currency-dolar")
    const currencyImg = document.querySelector(".currency-image")

    if (currencySelect.value == 'dolar') {
        currencyDolar.innerHTML = "Dólar Americano"
        currencyImg.src = './assets/estados-unidos(1) 1.png'
    }

    if (currencySelect.value == 'euro') {
        currencyDolar.innerHTML = "Euro"
        currencyImg.src = './assets/Euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyDolar.innerHTML = "Libra"
        currencyImg.src = './assets/libra 1.png'
    }

    convertValues()
}



currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues)