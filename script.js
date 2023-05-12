let numeroSorteado = document.querySelector("div.container h1")
const botaoSortear = document.querySelector("div.container button")

const palavras= new Array()
palavras[0] = "'Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.' (Js 1.9)";

palavras[1] = "'Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo'. (Jo 16:33)";

palavras[2] = "'Se o meu povo, que se chama pelo meu nome, se humilhar e orar, buscar a minha face e se afastar dos seus maus caminhos, dos céus o ouvirei, perdoarei o seu pecado e curarei a sua terra'. (2 Cronicas 7.14)";

palavras[3] = "'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês'.(Mt 6.33)";

palavras[4] = "'Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus'. (Rm 12.2)";

palavras[5] = "'E, agora, que o Deus da paz os torne santos em todos os aspectos, e que o espírito, a alma e o corpo de vocês sejam mantidos irrepreensíveis até a volta de nosso Senhor Jesus Cristo'. (1 Ts 5:23)";

palavras[6] = "'Tudo posso naquele que me fortalece'. (Fl 4.13)";

palavras[7] = "'Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus'. (1Ts 5.18)";
palavras[8] = "'Então disse Jesus: 'Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas'. (Mt 19.14)";

palavras[9] = "'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos'. (Pv 16.3)";

palavras[10] = "'Quem tem muitos amigos pode chegar à ruína, mas existe amigo mais apegado que um irmão'. (Pv 18.24)";

palavras[11] = "'Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus'. (Rm 12.1)";

palavras[12] = "'Então respondeu Jesus, e disse-lhe: Ó mulher, grande é a tua fé! Seja isso feito para contigo como tu desejas. E desde aquela hora a sua filha ficou sã'. (Mt 15.28)"; 

palavras[13] = "'Deixando, pois, toda a malícia, e todo o engano, e fingimentos, e invejas, e todas as murmurações,Desejai afetuosamente, como meninos novamente nascidos, o leite racional, não falsificado, para que por ele vades crescendo'. (1 Pd 2.1,2)"; 

palavras[14] = "'E, chegando-vos para ele, pedra viva, reprovada, na verdade, pelos homens, mas para com Deus eleita e preciosa,Vòs também, como pedras vivas, sois edificados casa espiritual e sacerdòcio santo, para oferecer sacrifícios espirituais agradáveis a Deus por Jesus Cristo'. (1 Pd 2.4,5)"; 

palavras[15] = "'Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade'. (2 Tm 2:15)"; 



botaoSortear.addEventListener("click", ()=>{

numeroSorteado.innerHTML =  palavras[
Math.floor(Math. random() * palavras.length)

]


})
