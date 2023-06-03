import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { delProduct, listProducts } from '../Redux/actions/actionProductos'
import { getIsAdmin } from '../helpers/admin'
import Edit from './Edit'


const Carrousel = ({ categoriaElegida }) => {

    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    let { products } = useSelector(store => store.products)

    products = products.filter(p => p.categoria === categoriaElegida)

    useEffect(() => {
        dispatch(listProducts())
        setIsAdmin(getIsAdmin())
        setIsLoading(false)
    }, [dispatch])

    const editar = (codigo) => {
        const traerProducto = products.find(t => t.codigo === codigo)
        setModal(true)
        setEnviarDatosModal(traerProducto)
    }


    const eliminarProductoFirebase = (codigo) => {
        Swal.fire({
            title: '¿Estas seguro que quieres eliminar este producto?',
            text: "No podrás deshacer esta áccion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(delProduct(codigo))
                Swal.fire(
                    'Eliminado!',
                    'Este producto ya no existe.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            {isLoading ? <div className='spinner'></div>
                :
                <section className='carrousel'>

                    <>
                        <h2>{categoriaElegida}</h2>
                        <div className='CardsCont'>
                            {
                                products.map((p, index) => (
                                    <div key={index}>
                                        <img src={p.foto} alt="" />
                                        <div>
                                            <p>{p.nombre}</p>
                                            <Link to={`/detail/${p.nombre}`}><h2>Ver más</h2></Link>
                                        </div>
                                        <span>$ {p.precio}.00</span>
                                        <div>
                                            <button style={{ display: isAdmin ? "" : "none" }} onClick={() => eliminarProductoFirebase(p.codigo)}>Eliminar</button>
                                            <button className='btnEditar' onClick={() => editar(p.codigo)}>Editar</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {modal === true ? <Edit modal={enviarDatosModal} /> : ''}
                    </>
                </section>}
        </>
    )
}

export default Carrousel