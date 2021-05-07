// funcao para buscar foto do dia (APOD)
function buscaFotoDoDiaAPOD(data) {
    const key = 'eIfF9MpYbCJFzZjbOTk82RdBsYB1CFLgujXzj6us'

    // metodo do jQuery para requisicoes ajax
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        // url de busca apod
        dataType: 'json', // definindo o tipo de dado
        // se for sucesso, executa a funcao
        success: function(dados) {
            document.getElementById('imgApod').src = dados.url;
            document.getElementById('titulo').innerText = dados.title
            document.getElementById('explicacao').innerText = dados.explanation
        }
    })
}

$("#pesquisa").click(function(event) {
    event.preventDefault()
    let valorDaData = $("#dataApod").val();
    buscaFotoDoDiaAPOD(valorDaData)

});