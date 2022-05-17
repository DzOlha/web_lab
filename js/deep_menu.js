
for (let li of list.querySelectorAll('li')) {
    /* создание span */
    let span = document.createElement('span'); 

    /* добавление класса для span */
    span.classList.add('show'); 

    /* вставить span внутри li */
    li.prepend(span); 

    /* присоединить к span следующий узел */
    span.append(span.nextSibling) 
}
list.onclick = function(event) {
    if (event.target.tagName != 'SPAN') return;

    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;

    if(!childrenList.hidden) {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
    else {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }
}   
