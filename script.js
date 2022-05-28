// main funcrtion //
function compute() {
    let principal = document.getElementById("principal").value // amount
    let rate = document.getElementById("rate").value    // range
    let years = document.getElementById("years").value    // years
    let interest = principal * rate * years / 100   // amswer logic
    let year = new Date().getFullYear() + parseInt(years) // today's year
// the answer //
document.getElementById("result").innerHTML = "If you deposit " +  principal +
", \<br>at interest rate of " + rate + "%\<br>You will receive an amount of "
+ interest + ",\<br>in the year " + year + "\<br>"
} 

// updater range //

function updateRate() {
    let ratevar = document.getElementById("rate").value
    document.getElementById("rates").innerText=ratevar
}

// positive niumber

function positiveNum() {
    let posnum = document.getElementById("principal").value
    let posnumBigThan = posnum > 0 
    if (!posnumBigThan){
        alert("Pleas, enter a positive number")
        document.getElementById("principal").focus()
    }
}