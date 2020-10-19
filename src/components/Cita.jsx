import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Pareja: <span>{cita.pareja}</span></p>
        <p>Anfitrión: <span>{cita.anfitrion}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Descripción: <span>{cita.descripcion}</span></p>

        <button 
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
        >
            Eliminar &times;
        </button>
    </div>
)

// documentacion para cita
Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}

export default Cita;