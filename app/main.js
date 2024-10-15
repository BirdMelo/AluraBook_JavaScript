let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooks();
const BookInput = document.getElementById('livros');

async function getBooks() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    console.table(livros);
    showBooks(livros)
}

function showBooks(library){
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