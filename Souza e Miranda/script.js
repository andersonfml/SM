function filtrar(tipo) {
  const produtos = document.querySelectorAll('.produto');
  produtos.forEach(produto => {
    if (tipo === 'todos') {
      produto.style.display = 'block';
    } else {
      if (produto.classList.contains(tipo)) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    }
  });
}
