function Conversion() {
    const ratio = 25000;
    var inamount = document.getElementById("amount").value;
    var incur = document.getElementById("inputCurrency").value;
    var outcur = document.getElementById("outputCurrency").value;
    if (incur == "VND" && outcur == "USD")
    {
        let result = inamount/ratio;
        document.getElementById("result").innerHTML = result;
    }
    else {
        let result = inamount*ratio;
        document.getElementById("result").innerHTML = result;
    }

    // switch(incur) {
    //     case "USD":{
    //         if (outcur == "VND") {
    //             let result = inamount*ratio;
    //             document.getElementById("result").innerHTML = "Kết quả: " + result + "VND";
    //             break;
    //         }
    //         else {
    //             document.getElementById("result").innerHTML = "Kết quả: " + inamount + "USD";
    //             break;
    //         }
    //     }
    //     case "VND": {
    //         if (outcur == "USD") {
    //             let result = inamount/ratio;
    //             document.getElementById("result").innerHTML = "Kết quả: " + result + "USD";
    //             break;
    //         }
    //         else {
    //             document.getElementById("result").innerHTML = "Kết quả: " + inamount + "VND";
    //             break;
    //         }
    //     }
    // }
}     