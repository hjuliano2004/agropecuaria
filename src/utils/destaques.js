import { adotar, dom } from "./adotar.js";
import { img, interacao } from "./lista.js";
import { formatCoins } from "./utils.js";

export function cardDestaques(racao){

    if(!racao){

        return dom("p", "404 - item não encontrado", {class: "item-destaque erro"})
    }

    const li = dom("li", "", {class: "item-destaque"});

    let image = img(racao.img);
    image.classList.add("quadro-destaque");
    image.alt = `${racao.marca} - ${racao.tipo}`

    let nome = dom("p", racao.marca, {class: "nome-produto"});
    let peso = dom("p", racao.peso, {class: "peso"});
    let preco = dom("p",`R$${formatCoins(racao.preco)}` ,{class: "preco-produto preco"})

    let divInteracao = interacao(racao, "int_destaque");

    return adotar(li, [image, nome, peso, preco, divInteracao]);
}


/*                  <li class="item-destaque">
                        <figure class="quadro-destaque">
                            <img src="src/imagens/bocao-premium-caes-adultos.webp" alt="Pedigree sachê para cães">
                        </figure>
                        <p class="nome-produto">Bocão premium - cães adultos</p>
                        <p class="peso">7kg</p>
                        <p class="preco-produto">R$10,00</p>
                    </li>

                    */