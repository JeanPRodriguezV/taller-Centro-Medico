const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
// campo propio de los médicos 
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
// campo propio de los pacientes
const edad = document.getElementById("edad")
// llamado de los formularios 
const formularioMedicos = document.getElementById("registro-medicos-form")
const formularioPacientes = document.getElementById("registro-pacientes-form")

class Persona {
    constructor(nombres, apellidos, cedula, telefono, especialidad) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.telefono = telefono
        this.especialidad = especialidad
    }
}

const mostrarMedicos = function () {
    let medicos = []
    let cuerpoTabla = document.getElementById("cuerpo-tabla-medicos")
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach((medico) => {
        let fila = document.createElement("tr")
        //para crear celda DOM tiene un metodo que es insertCell()
        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()

        celdaNombres.textContent = medico.nombres
        celdaApellidos.textContent = medico.apellidos
        celdaCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTelefono.textContent = medico.telefono
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        celdaPaciente.textContent = "Sin asignar"

        cuerpoTabla.appendChild(fila)
    })
}

///Unicamente ejecuta la funcion cuando estamos ubicados en listado-medicos.html
if(window.location.href.endsWith("listadoMedicos.html")){
    mostrarMedicos()
}

//Unicamente ejecuta el addEventListener cuando estamos ubicados en registro-medicos.html
if (window.location.href.endsWith("registroMedicos.html")){

    // El evento para formularioMedicos va a ser de tipo guardar es decir submit
formularioMedicos.addEventListener("submit", function (evento) {
    //previene que la página se recargue sin antes hacer la lógica del addEventListener
    evento.preventDefault()

    let valorNombres = nombres.value
    let valorApellidos = apellidos.value
    let valorCedula = cedula.value
    let valorConsultorio = consultorio.value
    let valorTelefono = telefono.value
    let valorCorreo = correo.value
    let valorEspecialidad = especialidad.value

    const medico = new Persona(valorNombres, valorApellidos, valorCedula, valorTelefono, valorEspecialidad)
    medico.consultorio = valorConsultorio
    medico.correo = valorCorreo



    let medicos = []

    let localMedicos = localStorage.getItem("medicos")
    // Si localMedicos no está vacio lo convierte en objeto para hacer el push
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    alert("Médico registrado!")

})

}


