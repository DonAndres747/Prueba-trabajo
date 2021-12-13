var inputs = document.getElementsByClassName('formulario_input');
var infoPac = new Object();

for (var i = 0; i < inputs.length ; i++) {
   
    inputs[i].addEventListener('keyup', function(){
        if (this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}
 
function mostrar(){
    if(document.getElementById("fuma1").checked){
        document.getElementById("tiempo").style.display="block"
        document.getElementById("tiempo").required="required";
    }else if(document.getElementById("fuma2").checked){
        document.getElementById("tiempo").style.display="none"
    }
}

var guardar = function(){

    infoPac.tipoDoc = document.getElementById("tipoDoc").value;
    infoPac.CC = parseInt(document.getElementById('CC').value);
    infoPac.nombres = document.getElementById('nombres').value;
    infoPac.apellidos = document.getElementById('apellidos').value;
    infoPac.edad = parseInt(document.getElementById('edad').value)
    infoPac.direccion = document.getElementById('direccion').value;
    infoPac.sexo = document.getElementById("sexo").value;
    infoPac.peso = parseInt(document.getElementById('peso').value)
    infoPac.estatura = parseInt(document.getElementById('estatura').value)

    if (document.getElementById("fuma1").checked) {
        infoPac.fuma="Si"
        infoPac.consumoEnAnos = document.getElementById("tiempo").value;
    }else{
        infoPac.fuma="No"
        infoPac.consumoEnAnos=00;
    }
    if (document.getElementById("dieta1").checked) {
        infoPac.dieta="Si"
    }else{
        infoPac.dieta="No"
    }
    infoPac.relacionPesoEstatura = parseFloat((infoPac.peso/Math.pow((infoPac.estatura/100), 2)).toFixed(2));
    infoPac.estadoPaciente="Pendiente"

    if(infoPac.edad>=1 && infoPac.edad<=5){
       infoPac.prioridad= infoPac.relacionPesoEstatura+3
    }else if(infoPac.edad>=6 && infoPac.edad<=12){
       infoPac.prioridad=infoPac.relacionPesoEstatura+2
    }else if(infoPac.edad>=13 && infoPac.edad<=15){
        infoPac.prioridad=infoPac.relacionPesoEstatura+1
    }else if(infoPac.edad>=16 && infoPac.edad<=40){
        if(infoPac.fuma=="Si"){
            infoPac.prioridad=(infoPac.consumoEnAnos/4)+2
        }else{
            infoPac.prioridad=2
        }
    }else if(infoPac.edad>=41){
        if(infoPac.dieta=="Si"){
            if(infoPac.edad>=60 && infoPac.edad<=100){
                infoPac.prioridad=parseFloat((infoPac.edad/20)+4)
            }else{
                infoPac.prioridad=parseFloat(((infoPac.edad/30)+3).toFixed(2))
            }
        }else{
            infoPac.prioridad=parseFloat(((infoPac.edad/30)+3).toFixed(2))
        }
    }
    console.log(infoPac.edad);
    if(infoPac.edad>=1 && infoPac.edad<=40){
        infoPac.riesgo=(infoPac.edad*infoPac.prioridad)/100
    }else if(infoPac.edad>=41){
        infoPac.riesgo=((infoPac.edad*infoPac.prioridad)/100)+5.3
    }

    console.log(infoPac);
    enviar();
}   

var enviar= function(){
    fetch('http://127.0.0.1:5000/guardar',{ 
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(infoPac),
        headers:{
            "Content-type": "application/json"
        }
    })
        .then(res => res.json)
        .then(res2 => console.log(res2.status));

}