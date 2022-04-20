import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { Editarcarritos } from '../Redux/actions/actionCarrito';



const ProductoCarrito = ({producto}) => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset, setValues] = useForm({
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        precio: producto.precio,
        foto: producto.foto,
        marca: producto.marca,
    })

    const { nombre, cantidad, precio, marca, foto, codigo } = values;

    useEffect(() => {
        setValues(producto)
    }, [producto]);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Editarcarritos({
            nombre,
            cantidad,
            precio,
            marca,
            foto,
            codigo,
        }
        ));
        reset();
    }

    return (
        <div>
            <div >
                <div >
                    <form onSubmit={handleSubmit}>
                        <h1> Modificar cantidad</h1>
                        <hr />
                        <div >
                            <label >Nombre Producto</label>
                            <div codigo>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    placeholder="nombre"
                                    autoComplete="off"
                                    value={nombre}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div >
                            <label >Cantidad</label>
                            <div >
                                <input
                                    type="text"
                                    name="cantidad"
                                    className="form-control"
                                    placeholder="cantidad"
                                    autoComplete="off"
                                    value={cantidad}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button type="submit" >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductoCarrito