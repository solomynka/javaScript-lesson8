function hidenDiv() {
    const divElement = document.querySelector('#text');
    console.log(divElement);
    divElement.hidden = true;
    console.log(divElement.hidden);
}
function hidenBut() {
    const butElement = document.querySelector('.buttonForHidde');
    console.log(butElement);
    butElement.hidden = true;
    console.log(butElement.hidden);
}
const menuBody = document.querySelector('.menu_class');
document.addEventListener('click',menu);

function menu(event){
    if(event.target.closest('.menu_button')){
        menuBody.classList.toggle('active');
    }
    if(!event.target.closest('.menu')){
        menuBody.classList.remove('active');
    }
}