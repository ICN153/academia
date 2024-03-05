//alert('js Carregado');

//seleção de DOM
//console.log(document);
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var btnPopup = document.querySelector('.fechar');
var bgPopup = document.querySelector('.bg-popup')
//console.log(btnmenu);
//console.log(menu);


/*function boasVindas(){
    alert('olá!');
}
*/
// Ao clicar no btnMenu, chamar a função "boasVindas"
// btnmenu.addEventListener('click', boasVindas);

btnMenu.addEventListener('click', function(){
    
    //add ou remove a classe menu-open   
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
    
    
})

menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    menu.classList.remove('x');
})

    btnPopup.addEventListener('click', function(){
    //bgPopup.classList.add('bg-popup-none');
    bgPopup.style.display = 'none' ;
})


