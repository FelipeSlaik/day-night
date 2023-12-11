function alterarTema(tema){
    const body = document.body;
    const shadow = document.getElementById('shadow');
const temas = {
    tema1:{ 
       backgroundImage: 'url(https://static.vecteezy.com/ti/fotos-gratis/p2/7771293-coqueiro-contra-ceu-azul-e-nuvens-brancas-verao-e-praia-paraiso-conceito-tropical-coco-palm-arvore-verao-ferias-na-ilha-coco-arvore-em-resort-pelo-mar-tropical-em-dia-ensolarado-gratis-foto.jpg)' ,
       boxShadow: '0 0 10px #f85b18' ,
       mensagem: "Você selecionou o Tema Dia! Bem vindo ao tema tropical. "
    },

    tema2: {
        backgroundImage:'url(https://static.vecteezy.com/ti/vetor-gratis/p1/9432522-noite-estrelada-paisagem-com-arvores-grama-e-a-lua-vetor.jpg)' ,
        boxShadow:'0 0 10px #a6e944' ,
        mensagem: "Você selecionou o Tema Noite!  Boa noite estrelada e tranquila. "
        
    }

};

const temaSelecionado = temas[tema];
    body.style.backgroundImage = temaSelecionado.backgroundImage;
    shadow.style.boxShadow = temaSelecionado.boxShadow;

    setTimeout(() => {
    alert(temaSelecionado.mensagem);
}, 500);
}
    
    
