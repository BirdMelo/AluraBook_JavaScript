const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => button.addEventListener('click', filterbooks))
function filterbooks(){
    const btn = document.getElementById(this.id)
    
    let filteredBooks = livros.filter(livro => livro.categoria == btn.value)
    showBooks(filteredBooks)
}