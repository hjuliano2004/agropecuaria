export function esconde(lista) {

    for (let i = 0; i < lista.length; i++) {
        lista[i].style.display = "none";
    }
}

export function mostra(lista) {

    for (let i = 0; i < lista.length; i++) {
        lista[i].style.display = "block";
    }
}





export function formatCoins(coin) {

    if (Number.isInteger(coin)) {
        return `${coin},00`;
    }

    let inteiro = Math.floor(coin);

    return `${inteiro},${nDepoisVirgula(coin)}`;
}



function nDepoisVirgula(coin) {


    let string = `${coin}`;

    let depois_da_virgula = false;

    let digitos = [];

    for (let i = 0; i < string.length; i++) {
        if (depois_da_virgula) {
            digitos.push(string[i]);
        }

        if (digitos.length == 2) {
            return `${digitos[0]}${digitos[1]}`;
        }

        if (string[i] == ".") {
            depois_da_virgula = true;
        }
    }

    if (digitos.length == 1) {
        return `${digitos[0]}0`;
    }


}