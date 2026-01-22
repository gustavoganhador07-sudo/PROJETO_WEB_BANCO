
 function entrarPagina(){
    var nome_login, nome_senha;
    nome_login = document.getElementById('inplogin').value;
    nome_senha = document.getElementById('inpsenha').value;
   
    if(nome_login  === "Gustavo" && nome_senha === "123"){
       alert("Usuario logado com sucesso!");
       window.location.href="contaBancaria.html";
    }
    else{
       alert("Usuário e/ou senha incorretos. Tente novamente.");
    }
 }

