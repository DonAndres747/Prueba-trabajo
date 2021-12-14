##techinologies

javaScript 
python
bootstrap
msql


abrir y ejeuctar el archivo dbpacientes_pacientes.sql en mysql workbench 
que esta ubicado en la carpeta script

ejecutar los comandos 

npm install bootstrap 
py -m pip install virtualenv 
py -m virtualenv env


luego de esto se abre el powershell de windows en modo administrador y se ejecutan los comandos

Set-ExecutionPolicy -Scope LocalMachine unrestricted
se escribe si cuando lo pregunte

Set-ExecutionPolicy -Scope CurrentUser unrestricted
se escribe si cuando lo pregunte

y luego se comprobara ejecutando el siguente comando en el terminal de visual
Get-ExecutionPolicy -list

y esto tiene que mostrar algo tal que asi

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser    Unrestricted
 LocalMachine       Undefined

y ahora ejecutar

.\env\Scripts\activate
py -m pip install -r requirements.txt
py .\src\app.py



Opcion 1
link para correr el frontend

https://donandres747.github.io/Prueba-trabajo/

Opcion 2 
correr el frontend desde el visual usando la extension Live Server