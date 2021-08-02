//Get the values from app page
//Controller Function
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Parse the input values to integer

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let FizzBuzzResults = fizzBuzzC(fizzValue, buzzValue);
        displayDataB(FizzBuzzResults);
    } else {
        alert("Must enter integers");
    }
}

//Run the logic of the app
//Logic Function
function runFizzBuzz(fizzValue, buzzValue) {
    let FizzBuzzResults = [];
    for (let i = 1; i <= 100; i++) {

        if (i % fizzValue == 0 && i % buzzValue == 0) {
            FizzBuzzResults.push("FizzBuzz");
        } else if (i % fizzValue == 0) {
            FizzBuzzResults.push("Fizz");
        } else if (i % buzzValue == 0) {
            FizzBuzzResults.push("Buzz");
        } else {
            FizzBuzzResults.push(i);
        }
    }
    return FizzBuzzResults;
}

function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;
    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }

    }
    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++){
        let value = ((i%fizzValue == 0 ? 'Fizz' : '') + (i%buzzValue == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

//loop over the array to display data
function displayData(fbArray) {
    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    //add all the rows to the table    
    for (let i = 0; i < fbArray.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //Grap use the put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];

        tableBody.appendChild(tableRow);
    }
}

function displayDataB(resultArr){
    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";
    
    for (let i = 0; i < resultArr.length; i += 4) {
        
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].textContent = resultArr[i];
        rowCols[0].classList.add(resultArr[i]);
        rowCols[1].textContent = resultArr[i+1];
        rowCols[1].classList.add(resultArr[i+1]);
        rowCols[2].textContent = resultArr[i+2];
        rowCols[2].classList.add(resultArr[i+2])
        rowCols[3].textContent = resultArr[i+3];
        rowCols[3].classList.add(resultArr[i+3])
        tableBody.appendChild(tableRow);
    }
}