var inputs = document.getElementsByClassName('formulario_input');
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

    var tipoCC = document.getElementById("tipoCC").value;
    var CC = document.getElementById('CC').value;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var edad = document.getElementById('edad').value;
    var direccion = document.getElementById('direccion').value;
    var sexo = document.getElementById("sexo").value;
    var peso = document.getElementById('peso').value;
    var estatura = document.getElementById('estatura').value;
    var prioridad;
    var riesgo;
    
    if (document.getElementById("fuma1").checked) {
        var fuma="Si"
        var años_de_fumador = document.getElementById("tiempo").value;
    }else{
        var fuma="No"
        var años_de_fumador=null;
    }
    if (document.getElementById("dieta1").checked) {
        var dieta="Si"
    }else{
        var dieta="No"
    }
    var relacionPesoEstatura = parseFloat((peso/Math.pow((estatura/100), 2)).toFixed(2));
    var estadoPaciente="Pendiente"

    if(edad>=1 && edad<=5){
       prioridad= relacionPesoEstatura+3
    }else if(edad>=6 && edad<=12){
       prioridad=relacionPesoEstatura+2
    }else if(edad>=13 && edad<=15){
        prioridad=relacionPesoEstatura+1
    }else if(edad>=16 && edad<=40){
        if(fuma=="Si"){
            prioridad=(años_de_fumador/4)+2
        }else{
            prioridad=2
        }
    }else if(edad>=41){
        if(dieta=="Si"){
            if(edad>=60 && edad<=100){
                prioridad=(edad/20)+4
            }
        }else{
            prioridad=((edad/30)+3).toFixed(3)
        }
    }

    if(edad>=1 && edad<=40){
        riesgo=(edad*prioridad)/100
    }else if(edad>=41){
        riesgo=((edad*prioridad)/100)+5.3
    }

    console.log(tipoCC+" "+CC+" "+nombres+" "+apellidos+" "+edad+" "+direccion+" "+sexo+" "+peso+" "+estatura+" "+fuma+" Consumo en años:"+años_de_fumador+
    " "+dieta+" RelacionPE: "+relacionPesoEstatura+" "+estadoPaciente+" prioridad="+prioridad+" riesgo:"+riesgo);
}   