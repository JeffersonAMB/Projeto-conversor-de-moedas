
const botaoConverter = document.querySelector("button")
const selectConverterPara = document.querySelector("#converter-para")
const imgConvertido = document.querySelector("#logo-moeda-convertida")
const paragrafoConvertido = document.querySelector("#paragrafo-convertido")
const selectConverterDe = document.querySelector("#converter-de")
const imgAConverter = document.querySelector("#logo-a-converter")
const paragrafoAConverter = document.querySelector("#paragrafo-a-converter")

function conversaoDoReal() {
    const valorDoInput = document.querySelector("#input").value
    const valoraconverter = document.querySelector("#valoraconverter")
    const valorConvertido = document.querySelector("#valor-convertido")
    const dolaraoreal = 6.09
    const euroaoreal = 6.35
    const dolaraoeuro = 1.04


    if (selectConverterDe.value === "dolar" && selectConverterPara.value === "real") {

        valoraconverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput)
        paragrafoAConverter.innerHTML = "Dólar"
        imgAConverter.src = "./img/estados-unidos.png"


        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * dolaraoreal)
        paragrafoConvertido.innerHTML = "Reais"
        imgConvertido.src = "./img/brasil2.png"

    }

    if (selectConverterDe.value === "real" && selectConverterPara.value === "dolar") {

        valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput)
        imgAConverter.src = "./img/brasil2.png"
        paragrafoAConverter.innerHTML = "Reais"

        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput / dolaraoreal)
        imgConvertido.src = "./img/estados-unidos.png"
        paragrafoConvertido.innerHTML = "Dolar"


    }


    if (selectConverterDe.value === "real" && selectConverterPara.value === "euro") {

        valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput)
        imgAConverter.src = "./img/brasil2.png"
        paragrafoAConverter.innerHTML = "Reais"

        valorConvertido.innerHTML = new Intl.NumberFormat("de-EN", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / euroaoreal)
        paragrafoConvertido.innerHTML = "Euro"
        imgConvertido.src = "./img/logo-euro.png"
    }

    if (selectConverterDe.value === "euro" && selectConverterPara.value === "real") {
        valoraconverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput)
        paragrafoAConverter.innerHTML = "Euro"
        imgAConverter.src = "./img/logo-euro.png"


        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * euroaoreal)
        paragrafoConvertido.innerHTML = "Reais"
        imgConvertido.src = "./img/brasil2.png"
    }

    if (selectConverterDe.value === "euro" && selectConverterPara.value === "dolar") {
        valoraconverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput)
        paragrafoAConverter.innerHTML = "Euro"
        imgAConverter.src = "./img/logo-euro.png"


        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput * dolaraoeuro)
        paragrafoConvertido.innerHTML = "Dolar"
        imgConvertido.src = "./img/estados-unidos.png"


    }

    if (selectConverterDe.value === "dolar" && selectConverterPara.value === "euro") {

        valoraconverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput)
        imgAConverter.src = "./img/estados-unidos.png"
        paragrafoAConverter.innerHTML = "Dólar"

        valorConvertido.innerHTML = new Intl.NumberFormat("de-EN", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / dolaraoeuro)
        paragrafoConvertido.innerHTML = "Euro"
        imgConvertido.src = "./img/logo-euro.png"
    }
}











botaoConverter.addEventListener("click", conversaoDoReal)














