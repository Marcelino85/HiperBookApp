const btn = document.getElementById("btn");
const verso = document.getElementById("verso");
const referencia = document.getElementById("referencia");
const comentario = document.getElementById("comentario"); // pegar o elemento do devocional
const autor = document.getElementById("autor"); // pegar o autor
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
  comentario.textContent = selecionado.comentario; // renderiza no HTML
  autor.textContent = selecionado.autor; // renderiza no HTML o autor
  
  // Mensagem com reflexão devocional estilizada
  mensagemAtual =
    `📖 Versículo do Dia\n\n` +
    `"${selecionado.texto}"\n📌 ${selecionado.referencia}\n\n` +
    `🕊️ Reflexão:\n${selecionado.comentario}\n\n`;
    `🕊️ Autor:\n${selecionado.autor}`;

  if (navigator.share) {
    redesSociais.style.display = 'none'; // esconder fallback
  } else {
    redesSociais.style.display = 'block'; // mostrar links alternativos
    const textoCodificado = encodeURIComponent(mensagemAtual);
    shareWhatsapp.href = `https://wa.me/?text=${textoCodificado}`;
    shareTwitter.href = `https://twitter.com/intent/tweet?text=${textoCodificado}`;
  }
});

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
