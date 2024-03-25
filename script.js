let titulo = document.createElement ("h1");
titulo.innerText = "Vende-se iPhone"
titulo.id = "titulo"

let body = document.querySelector("body");
body.appendChild(titulo);

let produto = document.createElement("section");
produto.innerHTML= 
`    <h2 id="iphone-15"> Apple iPhone 15 (128 GB) — Verde </h2>
<p id="valor-iphone-13"><strong>Preço:</strong> R$ 6.358.</p>
<p>Sobre esse item:</p>
<ul>
    <li>A DYNAMIC ISLAND CHEGA AO IPHONE 15 — A Dynamic Island mostra alertas e Atividades ao Vivo para você não perder nenhuma informação enquanto faz outras coisas. Você pode acompanhar sua próxima corrida, saber quem está ligando, confirmar as informações do seu voo e muito mais.</li>
    <li>CÂMERA GRANDE-ANGULAR DE 48 MP COM TELEOBJETIVA DE 2X — A câmera grande-angular de 48 MP fotografa em altíssima resolução. Assim, fica ainda mais fácil fazer fotos com detalhes incríveis. A teleobjetiva de 2x com qualidade óptica ajuda no enquadramento do close perfeito.</li>
</ul>
<img src="https://m.media-amazon.com/images/I/41BjCflNQDL._AC_SX679_.jpg" alt="pple iPhone 15 (128 GB) — Verde">`

body.appendChild(produto);

console.log(titulo)