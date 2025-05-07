const btn = document.getElementById("btn");
const verso = document.getElementById("verso");
const referencia = document.getElementById("referencia");
const btnCompartilhar = document.getElementById('btnCompartilhar');
const shareWhatsapp = document.getElementById('share-whatsapp');
const shareTwitter = document.getElementById('share-twitter');
const redesSociais = document.getElementById('redes-sociais');

let mensagemAtual = ""; // armazenar a última mensagem exibida

btn.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * versiculos.length);
  const selecionado = versiculos[aleatorio];

  verso.textContent = `"${selecionado.texto}"`;
  referencia.textContent = `📖 ${selecionado.referencia}`;

  mensagemAtual = `"${selecionado.texto}" - ${selecionado.referencia}`;

  if (navigator.share) {
    redesSociais.style.display = 'none'; // esconder fallback
  } else {
    // fallback para redes sociais
    redesSociais.style.display = 'block';
    const textoCodificado = encodeURIComponent(mensagemAtual);
    shareWhatsapp.href = `https://wa.me/?text=${textoCodificado}`;
    shareTwitter.href = `https://twitter.com/intent/tweet?text=${textoCodificado}`;
  }
});

// funcionalidade do botão de compartilhar
btnCompartilhar.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Versículo do Dia',
        text: mensagemAtual,
        url: window.location.href
      })
      .catch((err) => console.error('Erro ao compartilhar:', err));
  }
});
