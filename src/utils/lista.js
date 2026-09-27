import { adotar, dom } from "./adotar.js";
import { formatCoins } from "./utils.js";


export function lista(list){//gera a lista de ração
    const ul = dom("ul");

    for(let i = 0; i<list.length;i++){

        let obj = list[i];

        const li = dom("li");

        let div = dom("div", "", {class: "foto-info"});
        let foto = img(obj.img);

        let infos = info(obj);



        adotar(div, [foto, infos]);
        adotar(li, [div]);
        ul.appendChild(li);
    }


    return ul;
}

export function img(imagem) {
    const figure = dom("figure");
    return adotar(figure, [dom("img", "", { src: new URL(imagem, import.meta.url).href})]);
}

function info(obj){//constroi a div com informações que fica ao lado da foto da ração

    const div = dom("div", "", {class: "info"});

    let marca = dom("p", obj.marca);
    let tipo = dom("p", obj.tipo);
    let peso = dom("p", obj.peso);
    let preco = dom("p", `R$${formatCoins(obj.preco)}`, {class: "preco"});



    return adotar(div, [marca, tipo, peso, preco])

}