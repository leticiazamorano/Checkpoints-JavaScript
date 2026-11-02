function trocarProduto() {
    const imagem = document.getElementById("produto");
    const atual = imagem.getAttribute("src");

    if (atual === "produto1.webp") {
        imagem.setAttribute("src", "produto2.webp");
        imagem.setAttribute("alt", "Produto B");
    } else {
        imagem.setAttribute("src", "produto1.webp");
        imagem.setAttribute("alt", "Produto A");
    }
}