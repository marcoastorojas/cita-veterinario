import React from 'react'

export const Citas = ({listaCitas}) => {
  return (
    <section>
        {listaCitas.map((cita,i )=> <div key={i}>
            <h3><b>nombre:  </b>{cita.nombre}</h3>
            <h3><b>dueño: </b>{cita.dueño}</h3>
            <h3><b>fecha: </b>{cita.fecha}</h3>
            <h3><b>hora: </b>{cita.hora}</h3>
            <h3><b>sintomas: </b>{cita.sintomas}</h3>
        </div>)}
    </section>
  )
}
