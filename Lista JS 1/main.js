function validarFormulario(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let dataNascimento = document.getElementById("dataNascimento").value;
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let endereco = document.getElementById("endereco").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();
    let curso = document.getElementById("curso").value.trim();
    let matricula = document.getElementById("matricula").value.trim();

    if (!nome || !cpf || !dataNascimento || !email || !telefone || !endereco || !cidade || !estado || !curso || !matricula) {
        alert("Todos os campos são obrigatórios!");
        return;
    }
    
    if (!/^[0-9]{11}$/.test(cpf)) {
        alert("CPF deve conter 11 dígitos numéricos!");
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail inválido!");
        return;
    }
    
    if (!/^[0-9]{10,}$/.test(telefone)) {
        alert("O telefone deve conter pelo menos 10 dígitos numéricos!");
        return;
    }
    
    if (!/^[0-9]{8}$/.test(matricula)) {
        alert("A matrícula deve conter exatamente 8 dígitos numéricos!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    document.getElementById("formCadastro").submit();
}