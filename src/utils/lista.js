import { save } from "../models/racoes.js";
import { attPreco } from "../pages/inferior.js";
import { adotar, dom } from "./adotar.js";
import { formatCoins } from "./utils.js";


export function itemLista(obj) {//gera a lista de ração

    const li = dom("li", "", { class: "lista-racao" });

    let div = dom("div", "", { class: "foto-info" });
    let foto = img(obj.img);
    let infos = info(obj);

    let div2 = interacao(obj, "interacao");

    adotar(div, [foto, infos]);
    adotar(li, [div, div2]);

    return li;
}




export function img(imagem) {
    const figure = dom("figure");
    return adotar(figure, [dom("img", "", { src: new URL(imagem, import.meta.url).href })]);
}




function info(obj) {//constroi a div com informações que fica ao lado da foto da ração

    const div = dom("div", "", { class: "info" });

    let marca = dom("p", obj.marca);
    let tipo = dom("p", obj.tipo);
    let peso = dom("p", obj.peso);
    let preco = dom("p", `R$${formatCoins(obj.preco)}`, { class: "preco" });
    

    return adotar(div, [marca, tipo, peso, preco]);
}

export function interacao(obj, classe) {
    const div = dom("div", "", { class: classe });

    let menos = dom("button", "-");
    let p = dom("p", obj.quantidade);
    let mais = dom("button", "+");

    maisMenos(mais, menos, p, obj);

    return adotar(div, [menos, p, mais]);
}

function maisMenos(mais, menos, p, obj) {//soma, subtração e atualização da quantidade de cada produto na tela
    mais.addEventListener("click", () => {
        obj.quantidade++;
        p.innerText = obj.quantidade;
        save();
        attPreco();
    })

    menos.addEventListener("click", () => {
        if (obj.quantidade > 0) {
            obj.quantidade--;
            p.innerText = obj.quantidade;
        }
        save();
        attPreco();
    })
}