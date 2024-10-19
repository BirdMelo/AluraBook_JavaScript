const BookInput = document.getElementById('livros');
function showBooks(library){
    let discountBooks = takeDiscount(library);
    BookInput.innerHTML = ''
    library.forEach(book =>{
        BookInput.innerHTML +=
        `
        <div class="livro">
            <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">
                ${book.titulo}
            </h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">R$${BRPriceFormat(discountBooks.find(Dbook => Dbook.titulo === book.titulo).preco)}</p>
            <p class="livro__preco" id="cheio">R$${BRPriceFormat(book.preco)}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `
    })
}
function BRPriceFormat(price){
    return price.toFixed(2).toString().replace('.',',');
}