import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // crear el estatus incial del formulario - state de citas
    const [cita, actualizarCita] = useState({
        pareja: '',
        anfitrion: '',
        fecha: '',
        hora: '',
        descripcion: '',
    });
    // state para eerores
    const [error, actualizarError] = useState(false);

    // función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value,
        })
    }

    // aplicamos destructutring
    const {pareja, anfitrion, fecha, hora, descripcion} = cita;

    // cuando el usuario presione agregar cita
    const submitCita = e => {
        e.preventDefault();

        // validar
        if (
            pareja.trim() === '' || anfitrion.trim() === '' ||
            fecha.trim() === '' || hora.trim() === '' ||
            descripcion.trim() === ''
        ) {
            actualizarError(true)
            return;
        }
        // eliminar mensaje previo
        actualizarError(false);

        // asignar un if
        cita.id = uuid();

        // crear la cita
        crearCita(cita);

        // reiniciar el form
        actualizarCita({
            pareja: '',
            anfitrion: '',
            fecha: '',
            hora: '',
            descripcion: '',
        });
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null
            }

            <form 
                onSubmit={submitCita}
            >

                <label htmlFor="nombre pareja">Nombre Pareja</label>
                <input
                    type="text"
                    name="pareja"
                    className="u-full-width"
                    placeholder="Nombre de la pareja"
                    onChange={actualizarState}
                    value={pareja}
                />

                <label htmlFor="Anfitrio">Anfitrión</label>
                <input
                    type="text"
                    name="anfitrion"
                    className="u-full-width"
                    placeholder="Nombre Dueño/anfitrión"
                    onChange={actualizarState}
                    value={anfitrion}
                />

                <label htmlFor="fecha">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label htmlFor="hora">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    name="descripcion"
                    id=""
                    className="u-full-width"
                    placeholder="descripcion de los descripción de la cita"
                    onChange={actualizarState}
                    value={descripcion}
                >
                </textarea>

                <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar cita"
                />
            </form>
        </Fragment>
     );
}

// documentación de componente
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;