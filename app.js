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

// El evento para formularioMedicos va a ser de tipo guardar es decir submit
formularioMedicos.addEventListener("submit", function(evento){
    //previene que la página se recargue sin antes hacer la lógica del addEventListener
    evento.preventDefault()

    let valorNombres = nombres.value
    let valorApellidos = apellidos.value
    let valorCedula= cedula.value
    let valorConsultorio = consultorio.value
    let valorTelefono = telefono.value
    let valorCorreo = correo.value
    let valorEspecialidad = especialidad.value

    const medico = new Persona (valorNombres, valorApellidos, valorCedula, valorTelefono, valorEspecialidad)
    medico.consultorio = valorConsultorio
    medico.correo = valorCorreo
    
    console.log(medico) 
    alert("Médico registrado")


})