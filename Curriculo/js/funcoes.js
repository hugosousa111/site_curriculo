function verifica_campos() {
    var nome = formu.name.value;
    var email = formu.email.value;
    var mensagem = formu.mensagem.value;
    if ((nome == "") || (mensagem == "") || (email == "")){
      alert('Preencha todos os campos');
      return false;
    }else {
      return true;
    }
}

function validar_email(email) {
    user = email.value.substring(0, email.value.indexOf("@"));
    servico = email.value.substring(email.value.indexOf("@")+1, email.value.length);
    if (!((user.length >=1) && (servico.length >=3) &&
        //tamanho do usuario tem q ser maior q 1, e servico maior q 3
        (user.search("@")==-1) && (servico.search("@")==-1) &&
        //nem o usuario nem o servico devem conter o @, q nao seja na ultima posicao do user
        (user.search(" ")==-1) && (servico.search(" ")==-1) &&
        //nao pode conter o espaco em branco
        (servico.search(".")!=-1) && (servico.indexOf(".") >=1) &&
        (servico.lastIndexOf(".") < servico.length - 1))) {
        //o servico deve ter um ponto, mas nao pode ser o ultimo nem o primeiro
      alert("E-MAIL INVÁLIDO\n-Email deve conter um @\n"+
            "-A parte do usuário tem ter no mínimo 1 dígito e a parte do serviço no mínimo 3\n"+
            "-Não pode existir espaços em branco\n"+
            "-Na parte do serviço deve existir apenas um ponto e ele não pode ser nem o primiro nem o último dígito do serviço");
      document.getElementById("email").value=""; //limpar campo email
    }
}
