function menuShow(){ //funcao onclick criada no botao para interagir com a pag.

    let menuMobile = document.querySelector('.mobile-menu');// cria a variavel para armazenar o conteudo do mobile.menu e acessa ele atraves do document.querySelector

    if (menuMobile.classList.contains('open')){//se menuMobile (classlist usado para manipular um elemento)verifica se a classe esta ativa no elemento open.

        menuMobile.classList.remove('open');//remove a classe open.

        document.querySelector('.icon').src = "./img/menu_white_36dp.svg" // acessa .icon e adiciona um src para colocar uma nova imagem

    }else{//senao
        menuMobile.classList.add('open');//adiciona a class open
        document.querySelector('.icon').src = "./img/close_white_36dp.svg"//acessa .icon e adiciona a imagem atraves do src.
    }
}