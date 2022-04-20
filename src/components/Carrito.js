import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EliminarAll, Eliminarcarritos } from '../Redux/actions/actionCarrito'
import Swal from 'sweetalert2'
import Payment from '../components/Payment'
import ProductoCarrito from './ProductoCarrito'

const Carrito = () => {

    const { carrito } = useSelector(store => store.carrito)

    const dispatch = useDispatch()

    const [productoEditar, setProductoEditar] = useState({
        nombre: '',
        cantidad: "",
        precio: "",
        marca: "",
        foto: "",
    });

    const [modal, setModal] = useState(true)
    const [modal2, setModal2] = useState(false)
    const [subtotal, setSubtotal] = useState()

    useEffect(() => {
        let contador = 0
        carrito.map(p => contador = parseInt(p.precio * p.cantidad) + contador)
        setSubtotal(contador)
    }, [carrito])


    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Eliminar del Carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(Eliminarcarritos(id))
                Swal.fire(
                    'Eliminado!',
                    'success'
                )
            }
        })
    }

    const modal2abrir =(producto)=>{
        setProductoEditar(producto)
        setModal2(true)
    }

    const eliminarAll = () => {
        dispatch(EliminarAll())
    }


    return (
        <section className='carrito'>
            <div className='carritoProducts'>
                <h1>Carrito</h1>
                <hr />
                {
                    carrito.map(producto => (
                        <section key={producto.codigo}>
                            <div className='productoCardCarrito'>
                                <img src={producto.foto} alt="" />
                                <h2>{producto.nombre}</h2>
                                <h2><strong>${(parseInt(producto.precio) * producto.cantidad)}.00</strong></h2>
                                <h2 onClick={() => modal2abrir(producto)}>Cantidad: {producto.cantidad}</h2>
                                <button onClick={() => handleDelete(producto.codigo)}>Eliminar</button>
                            </div>
                            <hr />
                        </section>
                    ))}

                <button onClick={eliminarAll}>Vaciar Carrito</button>
            </div>
            {
                modal2 === true ?
                    <div className='cambiarCantidad'>
                        <ProductoCarrito producto={productoEditar} />
                        <button onClick={() => setModal2(false)}>Cerrar</button>
                    </div>
                    :
                    ''
            }

            {
                modal === true ?

                    <div className='subtotal'>
                        <h1>Subtotal ({carrito.length} productos) :</h1>
                        <strong color='red'>${subtotal}.00</strong>
                        <button onClick={() => setModal(false)}>Proceder al pago</button>
                    </div>

                    :
                    <section>

                        <button style={{ margin: '1rem 0', backgroundColor: 'grey' }} onClick={() => setModal(true)}>Volver</button>

                        <Payment />
                    </section>
            }


        </section>
    )
}

export default Carrito