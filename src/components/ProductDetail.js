import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Crearcarritos } from '../Redux/actions/actionCarrito';
import Carrousel from '../components/Carrousel';

const ProductDetail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { products } = useSelector(store => store.products)
    const { nombre } = useParams();

    const producto = products.find(p => p.nombre === nombre)

    const agregarCarrito = (pagoAhora) => {
        dispatch(Crearcarritos({
            ...producto,
            cantidad: 1
        }))
        if (pagoAhora === 'pagoAhora') {
            navigate("/carrito")
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <section>
            <Link to={'/'} style={{marginLeft: "10px"}}>Ir Atrás</Link>
            <div className='ProductDetail'>
                <div className='smallImgs'>
                    <img src={producto.foto} alt="" />
                    <img src={producto.foto} alt="" />
                    <img src={producto.foto} alt="" />
                </div>
                <div className='bigImg'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'detail',
                            isFluidWidth: true,
                            src: producto.foto
                        },
                        largeImage: {
                            src: producto.foto,
                            width: 900,
                            height: 900
                        }
                    }} />
                </div>
                <div className='description'>
                    <div>
                        <h2>{producto.nombre}</h2>
                        <span> <strong>Marca: </strong> {producto.marca} </span>
                    </div>
                    <div>
                        <p></p>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Acerca de este artículo</h2>
                    <p>{producto.descripcion}</p>
                </div>
                <div className='addCont'>
                    <span fontcolor='red'>${producto.precio}.00</span>
                    <p>Envio Gratis <link rel="stylesheet" href="#" />Detalles</p>
                    <p><strong>Llega:</strong>  dic 15-28</p>
                    <p>Puede que lo recibas despues de Navidad</p>
                    <button type='button' onClick={agregarCarrito}>Agregar al Carrito</button>
                    <button onClick={() => agregarCarrito('pagoAhora')}>Comprar Ahora</button>
                    <a href='#carrousel'>Transaccion Segura</a>
                </div>
            </div>
            <h1>Productos Relacionados: </h1>
            <Carrousel categoriaElegida={producto.categoria} />
        </section>
    )
}

export default ProductDetail