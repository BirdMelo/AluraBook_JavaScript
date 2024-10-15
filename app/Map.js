export function takeDiscount(livros){
    const desconto = 0.3;
    return livros.map(livro=> {
        return {...livro,preco: livro.preco - (livro.preco * desconto)}
    })
}