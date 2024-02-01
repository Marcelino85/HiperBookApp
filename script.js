const palavraSortida = document.querySelectorAll('div.container h1')[0];
const btn = document.getElementById('contat2');
const versos = document.getElementById('versos');
const cap = Math.floor(Math.random()*100)

btn.addEventListener("click", async () => {
    try {

        // URL da API
        const apiUrl = `https://www.abibliadigital.com.br/api/verses/nvi/sl/${cap}`;

        // Chamada à API
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Erro ao obter os dados da API');
        }

        const data = await response.json();
        console.log(data)

        // Exibir os dados da API
        if (data && data.verses && data.verses.length > 0) {
            const randomVerse = data.verses[Math.floor(Math.random() * data.verses.length)].text;
            versos.innerHTML = randomVerse;
            
            const livro = data.book.name
            const capitulo = data.chapter.number
            const versiculo = data.verses.number
            
            palavraSortida.innerHTML = `(${livro} ${capitulo}:${versiculo})`
        } else {
            throw new Error('Nenhum verso encontrado');
        }
        
        // Se necessário, você pode utilizar palavraSortida aqui também
        // palavraSortida.innerHTML =  `"${data.verses[0].text}" (${data.book.name} ${data.chapter.number}.${data.verses[0].number})`;
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
});

