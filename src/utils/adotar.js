
let elementos = [];

export function adotar(pai, filhos = []) {

    if(!filhos.length){console.log("array vazio ou objeto inválido" + pai.innetHTML)}

    for (let i = 0; i < filhos.length; i++) {
        pai.appendChild(filhos[i]);
    }

    return pai;
}


export function dom(tipo = "div", texto = "", attrs = {}, fixo = false) {
    const e = document.createElement(tipo);
    e.textContent = texto;

    for (const chave in attrs) {
        if (chave.startsWith("on") && typeof attrs[chave] === "function") {
            e.addEventListener(chave.slice(2).toLowerCase(), attrs[chave]);
        } else {
            e.setAttribute(chave, attrs[chave]);
        }
    }

    if (!fixo) {
        elementos.push(e);
    }
    return e;
}

export function domNs(ns, tipo = "svg", texto = "", attrs = {}, fixo = false) {//se usa apenas pra criar svg
    const e = document.createElementNS(ns, tipo);
    if (texto) e.textContent = texto;
    for (const chave in attrs) {
        e.setAttribute(chave, attrs[chave]);
    }

    if (!fixo) {
        elementos.push(e);
    }
    return e;
}

export function limpar() {
    for (const el of elementos) {
        if (el.parentNode) {
            el.remove();
        }
    }
    elementos = [];
}


/* Exemplo de uso:
const container = dom("section", "", { id: "principal", class: "container" });
const titulo = dom("h1", "Bem-vindo!", { class: "titulo" });
const paragrafo = dom("p", "Este é um exemplo de uso.", { class: "texto" });
const botao = dom("button", "Clique aqui", { id: "btn1", class: "btn" });

adotar(container, [titulo, paragrafo, botao])
*/