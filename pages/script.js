

function formulario(){
    let nome = document.getElementById('name').value;
    let telefone = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    if (nome == '' || telefone == '' || email == '' || cpf == '' || cep == ''){
        alert('Campo(s) vazio(s)')
    }
    else{
        alert('Tudo OK, '+nome+'.')
    }
}