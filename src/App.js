import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect funcino que se ejecuta al detectarse un cambio en el state dependiente
  // siempre pasarle un arreglo vacío para que se ejecute al menos una vez.
  useEffect( () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if (citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas))
      }
      else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
    }, [citas]
  );

  // funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita,
    ]);
  }

  // funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id )
    guardarCitas(nuevasCitas)
  }

  // mensaje condicional para las citas
  const titulo = citas.length === 0 ? 'No hay citas' : 'Adminstra tus citas'

  return (
    <Fragment>
          <h1>Administrador de de Citas</h1>

          <div className="container">
            <div className="row">
              <div className="one-half column">

                <Formulario
                  crearCita={crearCita}
                >
                </Formulario>

              </div>

              <div className="one-half column">
                <h2>{titulo}</h2>
                {citas.map(cita => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  >
                  </Cita>
                ))}
              </div>
            </div>
          </div>
    </Fragment>

  );
}

export default App;
