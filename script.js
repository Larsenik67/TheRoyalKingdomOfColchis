var error =[];

function myFunction() {
    var email =document.getElementById('email').value;
    var name =document.getElementById('name').value;
    var message =document.getElementById('message').value;
    console.log(email)
    if(email === '') {
        error.push('Veuillez renseigner votre email \n');
    } 
    if(name === '') {
        error.push('Veuillez renseigner votre nom \n');
    } 
    if(message === '') {
        error.push('Veuillez écrire votre message');
    } 
    if(error.length > 0) {
        alert(error);
    }
}