import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logoutAsync } from '../Redux/actions/actionLogin';
import { obtenerUsuarioStorage } from '../helpers/LocalStorage';
import { useForm } from '../hooks/useForm';

const NavBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [search, setSearch] = useState('')
    const { carrito } = useSelector(store => store.carrito)

    let { products } = useSelector(store => store.products)

    products = products.filter(p => ((p.nombre).toLocaleLowerCase()).includes((search).toLocaleLowerCase()))

    const [values, handleInputChange, reset] = useForm({
        busqueda: ''
    })

    const { busqueda } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values.busqueda)
        reset()
        setSearch(values.busqueda)
        setModal(true)

    }


    const handleLogout = () => {
        Swal.fire({
            title: '¿Cerrar Sesión?',
            text: "¿Estás seguro que deseas salir?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutAsync())
                navigate("/login")
                Swal.fire(
                    'Adios!',
                    'Gracias!',
                    'success'
                )
            }
        })
    }


    return (


        <>
            <div className="navBar">
                <nav className='nav1'>
                    <Link to='/'>
                        <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1649626694/samples/amazonas/logo_x0mgtj.png" alt="" />
                    </Link>
                    <div>
                        <NavLink to='/map'>
                            <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1649626694/samples/amazonas/gps_iyocio.png" alt="" />
                            Elige tu dirección
                        </NavLink>
                    </div>

                    <form className="searchBar" onSubmit={handleSubmit}>
                        <select name="depto" id="">
                            <option value="">Todos los departamentos</option>
                            <option value="">Cundinamarca</option>
                            <option value="">Antioquia</option>
                        </select>
                        <input type="text" name='busqueda' value={busqueda} onChange={handleInputChange} />
                        <button type="submit">
                            <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1649626694/samples/amazonas/search_a5gq1t.png" alt="" />
                        </button>
                    </form>

                    <div>
                        <p>Hola {obtenerUsuarioStorage('nombre')} </p>
                        <span>{obtenerUsuarioStorage('email')}</span>
                    </div>
                    <div>
                        <div>
                            <Link to='/carrito' >
                                <h1 style={{ color: 'lightgreen' }}>{carrito.length}</h1>
                                <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1649626694/samples/amazonas/shopping-cart_lkowvq.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleLogout}>
                            <img src="https://cdn-icons-png.flaticon.com/512/59/59399.png" alt="" />
                        </button>
                    </div>

                </nav>
                <nav className='nav2'>
                    <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1649626694/samples/amazonas/menu_ee0kma.png" alt="" />
                    <div>
                        <p>Todo</p>
                        <p>Tarjetas de Regalo</p>
                        <p>Prime</p>
                        <p>Los mas Vendidos</p>
                        <p>AmazonBasics</p>
                        <p>Cómputo y Tabletas</p>
                        <Link to='/add'>Agregar Productos</Link>
                    </div>
                </nav>



            </div>
            {
                modal === true ?
                    <section className='carrousel'>
                        <h2>Busqueda</h2>
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
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='btnBuscar' onClick={() => setModal(false)}>Cerrar Busqueda</button>
                    </section>
                    :
                    ''
            }
        </>
    )
}

export default NavBar