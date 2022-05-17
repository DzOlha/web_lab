
const feedback_button = document.querySelector('.feedback_button');
feedback_button.addEventListener('click', function(){
    document.querySelector('.feedback').style.display = 'flex';
})
 const close = document.querySelector('.close');

 close.addEventListener('click', function(){
    document.querySelector('.feedback').style.display = 'none';
 })

 const form = document.getElementById('form');
 form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
 })
 const username = document.getElementById('name'); 
 const phone = document.getElementById('phone');
 const email = document.getElementById('email');
 const message = document.getElementById('message');

 const setError = (element, errorMess) => {
     const inputControl = element.parentNode.parentNode;
     const errorDisplay = inputControl.querySelector('.error');

     errorDisplay.innerText = errorMess;
     inputControl.classList.add('error');
 }

const validateInputs = () => {
    const nameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const messValue = message.value.trim();

    if(nameValue === '') {
        setError(username, "Ім'я є обов'язковим!");
    }
    if(phoneValue === '') {
        setError(phone, "Телефон є обов'язковим!");
    }
    if(emailValue === '') {
        setError(email, "Email є обов'язковим!");
    }
    if(messValue === '') {
        setError(message, "Повідомлення є обов'язковим!");
    }
}