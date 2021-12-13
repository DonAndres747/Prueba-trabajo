from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from sqlalchemy import desc, asc
import json


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/dbpacientes'

db = SQLAlchemy(app)



@dataclass
class Pacientes(db.Model):
    TipoDoc = db.Column(db.String(3))
    Id = db.Column(db.Integer, primary_key=True ,unique=True, nullable=False)
    Nombres = db.Column(db.String(25))
    Apellidos = db.Column(db.String(25))
    Edad = db.Column(db.Integer)
    Direccion = db.Column(db.String(30))
    Sexo = db.Column(db.String(9))
    Peso = db.Column(db.Integer)
    Estatura = db.Column(db.Integer)
    Fuma = db.Column(db.String(2))
    ConsumoEnAnos = db.Column(db.Integer)
    Dieta = db.Column(db.String(2))
    RelacionPE = db.Column(db.Float)
    Estado = db.Column(db.String(9))
    Prioridad = db.Column(db.Integer)
    Riesgo = db.Column(db.Integer)     

    def __repr__(self):
        return '<Id %r>' % self.Id

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}



@app.route('/listar/riesgo')
@cross_origin()
def listar_riesgo():
     
    lista_pacientes = []
    datos_paciente = Pacientes.query.filter_by(Estado="Pendiente").order_by(Pacientes.Riesgo.desc())
    
    for paciente in datos_paciente:
        lista_pacientes.append(paciente.as_dict())    

    return jsonify(lista_pacientes)


@app.route('/listar/prioridad')
@cross_origin()
def listar_prioridad():
     
    lista_pacientes = []
    datos_paciente = Pacientes.query.filter_by(Estado="Pendiente").order_by(Pacientes.Prioridad.desc())
    
    for paciente in datos_paciente:
        lista_pacientes.append(paciente.as_dict())    

    return jsonify(lista_pacientes)

@app.route('/guardar',  methods=['POST'])
@cross_origin()
def guardar():
    #my_request = request.get_json()
    my_request = request.data.decode("UTF-8")
    my_request = json.loads(my_request)
    print(my_request)
    nuevo_paciente = Pacientes(
        TipoDoc = my_request["tipoDoc"],
        Id = my_request["CC"],
        Nombres = my_request["nombres"],
        Apellidos = my_request["apellidos"],
        Edad = my_request["edad"],
        Direccion = my_request["direccion"],
        Sexo = my_request["sexo"],
        Peso = my_request["peso"],
        Estatura = my_request["estatura"],
        Fuma = my_request["fuma"],
        ConsumoEnAnos = my_request["consumoEnAnos"],
        Dieta = my_request["dieta"],
        RelacionPE = my_request["relacionPesoEstatura"],
        Estado = my_request["estadoPaciente"],
        Prioridad = my_request["prioridad"],
        Riesgo = my_request["riesgo"]
    )
    db.session.add(nuevo_paciente)
    db.session.commit()
    return jsonify("okaoka")



@app.route('/actualizar', methods=['PUT'])
@cross_origin()
def actualizar():
    
    my_request = request.get_json()
    paciente_atendido = Pacientes.query.filter_by(Id=my_request["Id"]).first()
    paciente_atendido.Estado = "Atendido"
    db.session.commit()

    return jsonify(paciente_atendido.as_dict())


@app.route('/fumador')
@cross_origin()
def fumador():
     
    fumador_riesgoso = Pacientes.query.filter_by(Estado="Pendiente" , Fuma="Si").order_by(Pacientes.Prioridad.desc()).first() 
    
    return jsonify(fumador_riesgoso.TipoDoc, fumador_riesgoso.Id , fumador_riesgoso.Nombres, fumador_riesgoso.Prioridad)

  
@app.route('/menor')
@cross_origin()
def menor():
     
    paciente_menor = Pacientes.query.filter_by(Estado="Pendiente").order_by(Pacientes.Edad.asc()).first() 

    return jsonify(paciente_menor.TipoDoc, paciente_menor.Id, paciente_menor.Nombres, paciente_menor.Edad)


@app.route('/mayor')
@cross_origin()
def mayor():
     
    paciente_mayor = Pacientes.query.filter_by(Estado="Pendiente").order_by(Pacientes.Edad.desc()).first() 

    return jsonify(paciente_mayor.TipoDoc, paciente_mayor.Id, paciente_mayor.Nombres, paciente_mayor.Edad)




if __name__ == '__main__':
    
    app.run(debug=True)
