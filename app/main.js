let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBooks();
async function getBooks() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    showBooks(livros);
}

