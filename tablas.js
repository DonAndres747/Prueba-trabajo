var enviar= function(Id){
    fetch('http://127.0.0.1:5000/actualizar',{ 
        method: 'PUT', 
        mode: 'no-cors',
        body: JSON.stringify(Id),
        headers:{
            "Content-type": "application/json"
        }
    })
        .then(res => res.json)
        .then(res2 => console.log(res2.status));

}





const tabla = document.querySelector('.container')

const url = 'http://127.0.0.1:5000/listar/riesgo'

fetch(url).
then(res => res.json())
.then(data => mostrarDatos(data))
.catch(err => console.log(err))

const mostrarDatos = (data) => {
    console.log(data)
    let body = ''
    for(let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].TipoDoc}</td><td>${data[i].Id}</td><td>${data[i].Nombres}<td>${data[i].Apellidos}</td></td>
        <td>${data[i].Edad}</td><td>${data[i].Sexo}</td><td>${data[i].Fuma}</td><td>${data[i].ConsumoEnAnos}</td><td>${data[i].Dieta}</td>
        <td style="color:red">${data[i].Riesgo}</td>
        
        <td style="color:red"><input type="button" onClick="enviar(${data[i].Id})" value="Atender"></td></tr>`
    }

    document.getElementById('data').innerHTML = body 
}

const url2 = 'http://127.0.0.1:5000/listar/prioridad'

fetch(url2).
then(res => res.json())
.then(data => mostrarDatos2(data))
.catch(err => console.log(err))

const mostrarDatos2 = (data) => {
    console.log(data)
    let body = ''
    for(let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].TipoDoc}</td><td>${data[i].Id}</td><td>${data[i].Nombres}<td>${data[i].Apellidos}</td></td>
        <td>${data[i].Edad}</td><td>${data[i].Sexo}</td><td>${data[i].Fuma}</td><td>${data[i].ConsumoEnAnos}</td><td>${data[i].Dieta}</td>
        <td style="color:darkorange">${data[i].Prioridad}</td>
        
        <td style="color:red"><input type="button" onClick="enviar(${data[i].Id})" value="Atender"></td></tr>`

    }

    document.getElementById('data2').innerHTML = body 
}

const mayorFumador = document.querySelector('.fumador')

const url_fumador= 'http://127.0.0.1:5000/fumador'

fetch(url_fumador)
.then(res => res.json())
.then(data => {
    const p = document.createElement('p')
    p.innerHTML= "Paciente Fumador : "+data
    mayorFumador.appendChild(p)
    console.log(data)
}) 


