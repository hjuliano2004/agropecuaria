import { root, router, superior1, superior2, superior3 } from "../../script.js";
import { btn_carrinho } from "../pages/carrinho.js";
import { setInferior } from "../pages/inferior.js";
import { adotar, dom } from "./adotar.js";
import { btn_retorno } from "./Retorno.js";
import { navigate } from "./Router.js";

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



export function setupPaginas(titulo) {//setup das páginas de produtos
    root.style.display = "block";
    adotar(superior1, [btn_retorno("/")]);
    adotar(superior2, [dom("h3", titulo)]);
    adotar(superior3, [btn_carrinho()]);

    setInferior(() => {
        navigate(router, "/#carrinho");
    });

}

/*



*/