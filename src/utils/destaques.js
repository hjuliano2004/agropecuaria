import { router } from "../../script.js";
import { save } from "../models/racoes.js";
import { adotar, dom } from "./adotar.js";
import { img, interacao } from "./lista.js";
import { navigate } from "./Router.js";
import { formatCoins } from "./utils.js";

let popUp = document.getElementById("pop-up");

export function cardDestaques(racao) {

    if (!racao) {

        return dom("p", "404 - item não encontrado", { class: "item-destaque erro" })
    }

    const li = dom("li", "", { class: "item-destaque" });

    let image = img(racao.img);
    image.classList.add("quadro-destaque");
    image.alt = `${racao.marca} - ${racao.tipo}`

    let nome = dom("p", racao.marca, { class: "nome-produto" });
    let peso = dom("p", racao.peso, { class: "peso" });
    let preco = dom("p", `R$${formatCoins(racao.preco)}`, { class: "preco-produto preco" })

    let divInteracao = interacao(racao, "int_destaque", callback);

    return adotar(li, [image, nome, peso, preco, divInteracao]);
}

function callback(mais, menos, p, obj) {

    mais.addEventListener("click", () => {
        obj.quantidade++;
        p.innerText = obj.quantidade;

        spanDestaque()


        save();
    })

    menos.addEventListener("click", () => {
        if (obj.quantidade > 0) {
            obj.quantidade--;
            p.innerText = obj.quantidade;

            save();
        }
    })

}

let loop = null;
const esperaPadrao = 5000
let espera = esperaPadrao;

function spanDestaque() {

    popUp.innerText = "";

    let span = dom("span");
    let p = dom("p", "verificar o carrinho");
    let canvas = dom("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 100;
    canvas.height = 10;

    adotar(span, [p, canvas])
    adotar(popUp, [span])
    limpaPopUp(ctx)


    span.addEventListener("click", ()=>{
        navigate(router, "/#carrinho");
    })
}


function limpaPopUp(ctx) {

    const tempo = 100;

    clearInterval(loop)
    espera = 0

    loop = setInterval(() => {

       

let per = (ctx.canvas.width / 100) *  porcent(espera);

        linha(ctx, 0, 3, per, 3);

        if (espera < esperaPadrao) {
            espera += tempo;
        } else {
            clearInterval(loop)
            loop = null;
            espera = 0

            popUp.innerText = "";
        }

    }, tempo);
}

function porcent(tempo) {//descobre porcentagem de tempo concluida
    let o = tempo / esperaPadrao;

    return o * 100;
}



function linha(ctx, x1, y1, x2, y2) {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.moveTo(x1, y1);//a linha inicia aqui
    ctx.lineTo(x2, y2);//a linha termina aqui
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.stroke();
}