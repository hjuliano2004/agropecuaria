import { root, router } from "../../script.js";
import { navigate } from "../utils/Router.js";
import { numero } from "../utils/whatsapp.js";

let anoAtual = document.getElementById("ano-atual");
export let section_home = document.getElementById("home");
export let contato = document.getElementById("contato");
export let iconeCarrinho = document.getElementById("icone-carrinho");

    iconeCarrinho.addEventListener("click", ()=>{
        navigate(router, "/#carrinho")
    })

    contato.addEventListener("click", () => {
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`, "_blank");
    });


export function home() {

    anoAtual.textContent = new Date().getFullYear();
    section_home.style.display = "block";
    root.style.display = "none";
}

/*

function logo() {

    let logo = dom("div", "", { id: "logo" });
    let img = dom("img", "", {
        src: new URL("../imagens/logo.jpeg", import.meta.url).href, alt: "Logo da Agropecuária"
    });

    adotar(logo, [img]);
    return logo;

}

function navBar() {
    const nav = dom("nav", "", { id: "menu-nav" });

    let h2 = dom("h2", "Catalogo de rações");

    let ul = dom("ul", "");

    let caes = card("Cães", iconeCachorro);
    let gatos = card("Gatos", iconeGato);
    let equinos = card("Equinos", iconeCavalo);

    caes.addEventListener("click", () => {
        navigate(router, "/#carrinho");
    });

    gatos.addEventListener("click", () => {
        navigate(router, "/#carrinho");
    });

    equinos.addEventListener("click", () => {
        navigate(router, "/#carrinho");
    });

    adotar(nav, [h2, ul]);
    adotar(ul, [caes, gatos, equinos]);



    return adotar(nav, [adotar(ul, [caes, gatos, equinos])]);
}

function card(nome = "", svg = "") { //gera os cards do navbar, com o nome do animal e o svg do mesmo

    const card = dom("div", "", { class: "card-tipos-racao" });

    let svgAnimal = document.createElement("p");
    svgAnimal.innerHTML = svg;


    let texto = dom("p", `${nome}`, { class: "card-titulo" });

    return adotar(card, [svgAnimal, texto]);

}





function Contato() {//gera o botão de contato do header, com o icone do whatsapp e o numero de contato
    let contato = dom("div", "", { id: "contato" });


    let div = dom("div", "");
    let p1 = dom("p", `Telefone: ${numero}`);
    let p = dom("p", "Fale conosco!", { id: "subtitulo" });

    adotar(contato, [iconeWhatsapp(), div]);

    div.addEventListener("click", () => {
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`, "_blank");
    });


    adotar(div, [p1, p]);
    return contato;
}

function footer() {
    const footer = dom("footer", "", { id: "footer" });

    let ano = new Date().getFullYear();

    let a = dom("a", `Agropecuária Timbé - Todos os direitos reservados © ${ano}`);

    a.setAttribute("href", "https://maps.app.goo.gl/6S1izKt7bSWw9EjG9");

    return adotar(footer, [a]);
}



function iconeWhatsapp() {
    let icone = document.createElement("p");
    icone.setAttribute("id", "icone-whatsapp");

    icone.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
  <path d="M16.04 3C8.84 3 3 8.75 3 15.84c0 2.5.74 4.93 2.14 7L3 29l6.35-2.08a13.2 13.2 0 0 0 6.69 1.82h.01c7.2 0 13.04-5.75 13.04-12.84C29.09 8.75 23.24 3 16.04 3zm0 23.6h-.01a10.96 10.96 0 0 1-5.58-1.52l-.4-.24-3.77 1.23 1.24-3.67-.26-.38a10.67 10.67 0 0 1-1.67-5.72c0-5.9 4.86-10.71 10.84-10.71 5.97 0 10.84 4.8 10.84 10.71 0 5.9-4.87 10.7-10.83 10.7zm5.95-8.14c-.32-.16-1.9-.93-2.19-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.19.21-.37.24-.69.08-.32-.16-1.33-.48-2.53-1.54-.93-.82-1.56-1.84-1.75-2.15-.18-.32-.02-.49.14-.65.15-.15.32-.4.48-.61.16-.21.21-.35.32-.59.11-.24.05-.45-.03-.61-.08-.16-.71-1.71-.98-2.34-.25-.6-.5-.52-.69-.53h-.59c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.04 1.29 3.24c.16.21 2.23 3.37 5.4 4.72.76.32 1.35.51 1.81.65.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.77.27-1.43.19-1.56-.08-.14-.29-.22-.61-.38z"/>
</svg>`


    return icone;
}


function sessaoDestaque(){
    let sessao = dom("section", "", {id: "sessao-destaque"});

    let h2 = dom("h2", "Destaques");
    let ul = dom("ul", "", {id: "lista-destaques"});

    adotar(ul, [
        itemDestaque("Pedigree sachê", 5, new URL("../imagens/racaoCachorro.webp", import.meta.url).href),
        itemDestaque("Ração para Gatos", 8, new URL("../imagens/racaogato.webp", import.meta.url).href),
        itemDestaque("Ração para Equinos", 200, new URL("../imagens/racaoCavalo.jpg", import.meta.url).href)
    ]);


    adotar(sessao, [h2, ul]);

    return sessao;
}

function itemDestaque(nome, preco, imagem){
    let li = dom("li", "", {class: "item-destaque"});

    let img = dom("img", "", {src: imagem, alt: nome});
    let figure = dom("figure", "", {class: "quadro-destaque"});
    adotar(figure, [img]);

    let pNome = dom("p", nome, {class: "nome-produto"});
    let pPreco = dom("p", `R$${formatCoins(preco)}`, {class: "preco-produto"});

    adotar(li, [figure, pNome, pPreco]);

    return li;
}



export function home() {

    adotar(root, [modulo()]);
}

*/