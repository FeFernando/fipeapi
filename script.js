


function searchCar() {
    const selectMarcas = document.getElementById('marcas')
    const info = document.getElementById('info')
    const apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
    

    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(marca => {
                const linha = document.createElement('option')
                linha.innerText = marca.nome
                linha.value = marca.codigo
                selectMarcas.appendChild(linha)
            });
        })
}

searchCar()