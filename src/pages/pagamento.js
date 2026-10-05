import { display, router, superior1, superior2 } from "../../script.js";
import { carrinhoList, metodo_retirada } from "../models/Carrinho.js";
import { endereco } from "../models/endereco.js";
import { adotar, dom, domNs } from "../utils/adotar.js";
import { img } from "../utils/lista.js";
import { btn_retorno } from "../utils/Retorno.js";
import { navigate } from "../utils/Router.js";
import { confirmacao } from "./confirmacao.js";
import { formas } from "./previa.js";

function metodos() {
    const section = dom("section", "", { id: "pagamento" });
    const ul = dom("ul", "", { id: "lista-pagamentos" });

    adotar(ul, [lDinheiro(ul)]);
    listagem(ul);

    return adotar(section, [ul]);
}

function listagem(ul) {

    for (let i = 0; i < formas.length; i++) {

        let li = dom("li", "", { class: "dinheiro" });

        let image = img(formas[i].src);
        let p = dom("p", formas[i].texto);

        adotar(ul, [
            adotar(li, [image, p])
        ])

        acao(li, formas[i].texto, ul);

    }
}

function lDinheiro(ul) {

    const liDinheiro = dom("li", "", { class: "dinheiro" });

    const svgDinheiro = domNs("http://www.w3.org/2000/svg", "svg", "", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        fill: "green"
    });
    const pathDinheiro = domNs("http://www.w3.org/2000/svg", "path", "", {
        d: "M64 96C28.7 96 0 124.7 0 160V352c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H64zm0 48h512c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm256 32a80 80 0 1 0 0 160 80 80 0 1 0 0-160z"
    });

    adotar(svgDinheiro, [pathDinheiro]);
    adotar(liDinheiro, [svgDinheiro, dom("p", "Dinheiro")]);


    acao(liDinheiro, "Dinheiro", ul);

    return liDinheiro;
}

function acao(li, mPagamento, ul) {

    //if (texto == "Pix") {

     //   return null;
    //}

    li.addEventListener("click", () => {

        confirmacao(mPagamento, ul);

    });

    

}


export function pagamento() {

    if(!vazio()){
        navigate(router, "/#carrinho");
        return null;
    }

    if(!metodo_retirada){
        navigate(router, "/#retirada");
        return null;
    }

    if(!rotaEntrega()){
        navigate(router, "/#retirada");
        return null;
    }

    adotar(superior1, [btn_retorno("/#retirada")]);
    adotar(superior2, [dom("h3", "Forma de Pagamento")]);
    adotar(display, [metodos()]);
}

export function vazio(){//evita carregar paginas onde o carrinho deve conter ao menos alguma coisa

    let cheio = false;
    for(let i=0;i<carrinhoList.length;i++){
        if(carrinhoList[i].quantidade > 0){
            cheio = true;
        }
    }

    return cheio;
}


function rotaEntrega() {//impede pedido por entrega sem endereço definido

    if(metodo_retirada.metodo.toUpperCase() === "ENTREGA"){
        if(!endereco.rua || !endereco.numero || !endereco.bairro || !endereco.cep){
            navigate(router, "/#retirada");
            return null;
        }
    }
    return true;
}