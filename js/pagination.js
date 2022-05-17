
const productList = document.querySelector('.products_list').children;

const prev = document.querySelector('.prev_');
const next = document.querySelector('.next_');
const page = document.querySelector('.page-num');

const maxItem = 3;
let index = 1;
const pag = Math.ceil(productList.length / maxItem);

prev.addEventListener('click', function(){
    index--;
    check();
    showItems();
})
next.addEventListener('click', function(){
    index++;
    check();
    showItems();
})
//------------------------------------------------------------------
function check() {
    if(index == pag) {
        next.classList.add('disabled');
    }
    else {
        next.classList.remove('disabled');
    }
    if(index == 1) {
        prev.classList.add('disabled');
    }
    else {
        prev.classList.remove('disabled');
    }
}
//-----------------------------------------------------------------
function showItems() {
    let size = productList.length;
    for(let i = 0; i < size; i++){
        productList[i].classList.remove('show');
        productList[i].classList.add('hide');
        if(i >= (index*maxItem) - maxItem && i < index*maxItem) {
            productList[i].classList.remove('hide');
            productList[i].classList.add('show');
        }
        page.innerHTML = index;
    }
    
}
window.onload = function() {
    showItems();
    check();
    //slider();
}
