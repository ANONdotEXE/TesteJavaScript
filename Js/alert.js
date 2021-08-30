//Lucas Oliveira Assis
function cumprimento() {
    var data = new Date();
    hora = data.getHours();
    if ((hora >= 6) && (hora <= 12)) {
        alert("Bom dia");
    } else if ((hora > 12) && (hora < 18)) {
        alert("Boa tarde");
    } else if (hora >= 18) {
        alert("Boa noite");
    } else {
        alert("Boa madrugada");
    }
}
function msg1() {
    alert("Você clicou no botão");
}
function msg2() {
    alert("Cursor passou sobre a imagem")
}