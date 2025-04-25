
function comprar(produto) {
  const numero = '5581999999999'; // Substituir com número real
  const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto}`);
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank');
}
