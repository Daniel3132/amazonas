import React from 'react'
import Swal from 'sweetalert2'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'
import { useForm } from '../hooks/useForm'

const Payment = () => {

  const [values, handleInputChange, reset] = useForm({
    nombre: obtenerUsuarioStorage('nombre'),
    correo: obtenerUsuarioStorage('email'),
    numeroTarjeta: '',
    fecha: '',
    cvv: '',
    nombreTarjeta: ''

  })

  const { nombre, correo, numeroTarjeta, fecha, cvv, nombreTarjeta } = values


  const handleSubmit = (e) => {
    e.preventDefault()
    reset()
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada cone exito',
      showConfirmButton: true,
    })
  }

  return (
    <section className='payment'>
      <form onSubmit={handleSubmit}>
        <label>Nombre </label><br />
        <input className="full" type="text" required value={nombre} onChange={handleInputChange} /><br />
        <label>Correo Electronico</label><br />
        <input className="full" type="email" required value={correo} onChange={handleInputChange} /><br />
        <label>Informacion de la Tarjeta</label ><br />
        <input className="full" type="number" placeholder="1234 1234 1234 1234" required value={numeroTarjeta} onChange={handleInputChange} /><br />
        <div className="infoTarjeta2">
          <input type="date" className="media" placeholder="MM/YY" required value={fecha} onChange={handleInputChange} />
          <input type="number" className="media" placeholder="CVV" required value={cvv} onChange={handleInputChange} />
        </div>
        <label>Nombre en la tarjeta</label><br />
        <input className="full" type="name" required value={nombreTarjeta} onChange={handleInputChange} />
        <button type="submit" id="btnPagar">Pagar</button>
      </form>

    </section>
  )
}

export default Payment