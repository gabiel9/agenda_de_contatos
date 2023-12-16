const form = document.getElementById('form-lista')

let linhas = ' ';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputSobrenomeContato = document.getElementById('sobrenome-contato');
    const inputTelefoneContato = document.getElementById('telefone-conato');
    const inputRedeSocialContato = document.getElementById('rede-social-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputSobrenomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${inputRedeSocialContato.value}</td>`;

    linhas += linha;

    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputSobrenomeContato.value = ' ';
    inputTelefoneContato.value = ' ';
    inputRedeSocialContato.value = ' ';
})