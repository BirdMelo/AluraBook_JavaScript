const BookInput = document.getElementById('livros');
export function showBooks(library){
    console.log(BookInput)
    library.forEach(book =>{
        BookInput.innerHTML +=
        `
        <div class="livro">
            <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">
                ${book.titulo}
            </h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">R$${book.preco.toFixed(2).toString().replace('.',',')}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `
    })
}