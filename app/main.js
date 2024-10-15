import { showBooks } from "./ForEarch.js";
import { takeDiscount } from "./Map.js";
let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooks();
async function getBooks() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    let discountBooks = takeDiscount(livros)
    showBooks(discountBooks);
}

