const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting*

  

    
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let birthdate = document.getElementById("birthdate").value;
    let comments = document.getElementById("comments").value;
    let form = [firstname, lastname, birthdate, comments];
    alert(form);
    alert(form[1]);
    ipcRenderer.send('form-submission', form);


}


	