import { router } from "../../script.js";
import { metodo_retirada, setRetirada } from "../models/Carrinho.js";
import { adotar, dom } from "../utils/adotar.js";
import { navigate } from "../utils/Router.js";
import { mensagem } from "../utils/whatsapp.js";

export function confirmacao(mPagamento, ul) {
    const classe = "confirmacao";

    limpar(classe);

    const span = dom("span", "", { class: classe });
    const p = dom("p", `Confirmar pagamento com "${mPagamento.toUpperCase()}"`)
    const btn = dom("button", "cancelar");
    const confirma = dom("button", "Confirmar");

    adotar(ul, [adotar(span, [p, btn, confirma])]);

    confirma.addEventListener("click", () => {
        console.log(mensagem());
        //navigate(router, "/");//TODO:liberar retorno pra home
        console.log("confirma");
        span.remove();

        //setRetirada(null);TODO: ao finalizar debug, descomentar

    });

    btn.addEventListener("click", () => {
        span.remove();
    })
}

function limpar(classe) {
    let conf = document.getElementsByClassName(classe);

    for (let i = 0; i < conf.length; i++) {
        conf[i].remove();
    }
}


