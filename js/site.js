//Get the values from app page
//Controller Function
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Parse the input values to integer

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    let FizzBuzzResults = runFizzBuzz(startValue, endValue);
    display(FizzBuzzResults);
}

//Run the logic of the app
//Logic Function
function runFizzBuzz(startValue, endValue) {
    let FizzBuzzResults = [];
    for (let i = startValue; i <= endValue; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            FizzBuzzResults.push("FizzBuzz");
        } else if (i % 3 == 0) {
            FizzBuzzResults.push("Fizz");
        } else if (i % 5 == 0) {
            FizzBuzzResults.push("Buzz");
        } else {
            FizzBuzzResults.push(i);
        }
    }
    return FizzBuzzResults;
}

//Display the results
//Display Function
function display(FizzBuzzResults) {
    let templateRows = "";

    for (let index = 0; index < FizzBuzzResults.length - 1; index++) {
        templateRows += `<tr><td>${FizzBuzzResults[index]}</td></tr>`;
    }
    document.getElementById('results').innerHTML = templateRows;
}