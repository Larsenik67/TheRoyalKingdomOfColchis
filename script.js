var error =[];

function myFunction() {
    var email =document.getElementById('email').value;
    var name =document.getElementById('name').value;
    var message =document.getElementById('message').value;
    
    if(email === '') {
        error.push('Please enter your email \n');
    } 
    if(name === '') {
        error.push('Please enter your name \n');
    } 
    if(message === '') {
        error.push('Please enter your message');
    } 
    if(error.length > 0) {
        alert(error);
    } else {
        alert('Your email has been sent')
    }
}