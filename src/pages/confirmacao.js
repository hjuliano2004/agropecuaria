import { router } from "../../script.js";
import { metodo_retirada, setRetirada, zeraCarrinho } from "../models/Carrinho.js";
import { save } from "../models/racoes.js";
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
        //console.log(mensagem(mPagamento));

        mensagem(mPagamento);
        navigate(router, "/");
        
        span.remove();
        zeraCarrinho();
        save()

        setRetirada(null);//zerar metodo apenas apos a mensagem ser enviada, para que o metodo seja incluido na mensagem

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


