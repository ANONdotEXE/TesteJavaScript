//Lucas Oliveira Assis
function sum() {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;

    let result = parseInt(num1) + parseInt(num2);
    document.querySelector(".result").innerHTML = result;
}