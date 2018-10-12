$(document).ready(function () {


    $("#submit").click(function () {
        let weight = $("#weight").val()
        let height = $("#height").val()
        let bmi = "Your BMI is:" + Math.round(weight / (height * height))
        let bmifeature = ""
        let bmi1 = bmi.substring(bmi.indexOf(":") + 1)
        console.log(bmi1)
        if (bmi1 < 18) {
            bmifeature = "you are too thin."
        }
        if (bmi1 > 18 && bmi1 < 25) {
            bmifeature = "you are healthy."
        }
        if (bmi1 > 25) {
            bmifeature = "you have overweight."
        }
        $("#displayFact").html(bmi)
        $("#getbmi").html(bmifeature)
        console.log(bmifeature);
        console.log(bmi)
    })


});