import React from 'react'
import {useForm} from '../hooks/useForm'
export const CrearCitas = ({setListaCitas}) => {
    const { form, handleInput, resetForm } = useForm({
        nombre: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
      })
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setListaCitas((ListaCitas)=>[...ListaCitas,form])
        resetForm()
      }






    return (
        <article>
            <h2>Cerar Cita</h2>
            <form onSubmit={handleSubmit}>
                <h3>nombre de la mascota</h3>
                <input
                    name='nombre'
                    value={form.name}
                    onChange={handleInput}
                />
                <h3>nombre del dueño</h3>
                <input
                    name='dueño'
                    value={form.dueño}  
                    onChange={handleInput}
                />
                <h3>Fecha</h3>
                <input
                    name='fecha'
                    value={form.fecha}
                    onChange={handleInput}
                />
                <h3>hora</h3>
                <input
                    name='hora'
                    value={form.hora}
                    onChange={handleInput}
                />
                <h3>Sintomas</h3>
                <input
                    name='sintomas'
                    value={form.sintomas}
                    onChange={handleInput}
                />
                <button>enviar</button>
            </form>
        </article>
    )
}
