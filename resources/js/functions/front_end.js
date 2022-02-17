
$(document).ready(function () {
    //validando o formulario
    $('.ui.form')
    .form({
        fields: {
            nomeid: {
                identifier: 'nomeid',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor digite seu nome'
                    }
                ]
            },
            foneid: {
                identifier: 'foneid',
                rules: [
                    {
                        type: 'minLength[9]',
                        prompt: 'Digite um telefone valido'
                    }
                ]
            },
            emailid: {
                identifier: 'emailid',
                rules: [
                    {
                        type: 'email',
                        prompt: 'Por favor digite um endereco de email valido'
                    }
                ]
            },
            assuntoid: {
                identifier: 'assuntoid',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor digite o assunto'
                    }
                ]
            },
            msgid: {
                identifier: 'msgid',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'A mensagem esta vazia'
                    }
                ]
            },
        }
    });

    //Mostrando valores dos campos preenchidos
   document.querySelector("#nomeid").addEventListener('keyup',()=> { this.mostrarDados = mostrarDados()})    
    document.querySelector("#emailid").addEventListener('keyup',()=> { this.mostrarDados = mostrarDados()})
    document.querySelector("#foneid").addEventListener('keyup',()=> { this.mostrarDados = mostrarDados()})
    document.querySelector("#assuntoid").addEventListener('keyup',()=> { this.mostrarDados = mostrarDados()})
    document.querySelector("#msgid").addEventListener('keyup',()=> { this.mostrarDados = mostrarDados()})
    document.querySelector(".form.error").addEventListener('submit', function(event){
        event.preventDefault();
        salvarSession()
    })

});


function mostrarDados(){
    var nome = document.getElementById('nomeid').value;
    document.getElementById('nomeDigitado').innerHTML = nome;

    var email = document.getElementById('emailid').value;
    document.getElementById('emailDigitado').innerHTML = email;

    var fone = document.getElementById('foneid').value;
    document.getElementById('foneDigitado').innerHTML = fone;

    var assunto = document.getElementById('assuntoid').value;
    document.getElementById('assuntoDigitado').innerHTML = assunto;

    var msg = document.getElementById('msgid').value;
    document.getElementById('msgDigitado').innerHTML = msg;  
} 

//Adicionando no Session Storage
function salvarSession(){
    let local;

    local = document.getElementById("nomeid").value;
    sessionStorage.setItem("Nome", local);

    local = document.getElementById("emailid").value;
    sessionStorage.setItem("e-mail", local);

    local = document.getElementById("foneid").value;
    sessionStorage.setItem("Telefone", local); 

    local = document.getElementById("assuntoid").value;
    sessionStorage.setItem("Assunto", local);

    local = document.getElementById("msgid").value;
    sessionStorage.setItem("Mensagem", local);

    alert("Adicionado ao SessionStorage!");
}



//Recuperando valores da Session Storage
var GetSessionNome = sessionStorage.getItem("Nome");
var GetSessionEmail = sessionStorage.getItem("e-mail");
var GetSessionTel = sessionStorage.getItem("Telefone");
var GetSessionAssunto = sessionStorage.getItem("Assunto");
var GetSessionMensagem = sessionStorage.getItem("Mensagem"); 

console.log("teste");


