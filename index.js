
function fivePercent(event){
    let fivePercentage = (0.05 * parseInt(document.getElementById("bill").value));
    let total = fivePercentage + parseInt(document.getElementById("bill").value);
    document.getElementById("tip").innerHTML = "$" + fivePercentage ;
    document.getElementById("total").innerHTML = "$" + total ;
    event.preventDefault();
}
function tenPercent(event){
    let tenPercentage = (0.1 * parseInt(document.getElementById("bill").value));
    let total = tenPercentage + parseInt(document.getElementById("bill").value);
    document.getElementById("tip").innerHTML = "$" + tenPercentage ;
    document.getElementById("total").innerHTML = "$" + total ;
    event.preventDefault();
}
function fifteenPercent(event){
    let fifteenPercentage = (0.15 * parseInt(document.getElementById("bill").value));
    let total = fifteenPercentage + parseInt(document.getElementById("bill").value);
    document.getElementById("tip").innerHTML = "$" + fifteenPercentage ;
    document.getElementById("total").innerHTML = "$" + total ;
    event.preventDefault();
}
function twentyFivePercent(event){
    let twentyFivePercentage = (0.25 * parseInt(document.getElementById("bill").value));
    let total = twentyFivePercentage + parseInt(document.getElementById("bill").value);
    document.getElementById("tip").innerHTML = "$" + twentyFivePercentage ;
    document.getElementById("total").innerHTML = "$" + total ;
    event.preventDefault();
}
function fiftyPercent(event){
    let fiftyPercentage = (0.5 * parseInt(document.getElementById("bill").value));
    let total = fiftyPercentage + parseInt(document.getElementById("bill").value);
    document.getElementById("tip").innerHTML = "$" + fiftyPercentage ;
    document.getElementById("total").innerHTML = "$" + total ;
    event.preventDefault();
}
function customTip(){
    document.getElementById("tip").innerHTML = parseInt(document.getElementById("custom").value);
    document.getElementById("total").innerHTML = parseInt(document.getElementById("custom").value) + parseInt(document.getElementById("bill").value) ;

}
function reset(){
    document.getElementById("bill").value = document.getElementById("bill").defaultValue;
    document.getElementById("tip").innerHTML = "$" + 0;
    document.getElementById("total").innerHTML = "$" + 0;
}