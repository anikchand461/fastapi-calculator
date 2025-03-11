async function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;

    let response = await fetch(`/calculate?num1=${num1}&num2=${num2}&operation=${operation}`);
    let data = await response.json();
    
    document.getElementById("result").innerText = data.result;
}