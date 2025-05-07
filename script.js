const btn = document.getElementById("btn");
const verso = document.getElementById("verso");
const referencia = document.getElementById("referencia");
const btnCompartilhar = document.getElementById('btnCompartilhar');
const shareWhatsapp = document.getElementById('share-whatsapp');
const shareTwitter = document.getElementById('share-twitter');
const redesSociais = document.getElementById('redes-sociais');


btn.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * versiculos.length);
  const selecionado = versiculos[aleatorio];

  verso.textContent = `"${selecionado.texto}"`;
  referencia.textContent = `📖 ${selecionado.referencia}`;

  const mensagem = `"${randomVerse}" (${livro} ${capitulo}:${versiculo})`;

if (navigator.share) {
  redesSociais.style.display = 'none'; // esconde fallback
  btnCompartilhar.onclick = () => {
    navigator.share({
      title: 'Versículo do Dia',
      text: mensagem,
      url: window.location.href
    }).catch((err) => console.error('Erro ao compartilhar:', err));
  };
} else {
  // fallback para redes sociais
  redesSociais.style.display = 'block';
  const textoCodificado = encodeURIComponent(mensagem);
  shareWhatsapp.href = `https://wa.me/?text=${textoCodificado}`;
  shareTwitter.href = `https://twitter.com/intent/tweet?text=${textoCodificado}`;
}

});
