import React from 'react'
import { FileUp } from '../helpers/FileUp';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/actions/actionProductos';
import uuid from 'react-uuid';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        descripcion: '',
        marca: '',
        precio: '',
        categoria: '',
        foto: ''

    })

    const codigo = uuid()
    const { nombre, descripcion, marca, precio, categoria, foto } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(addProduct(
            {
                ...values,
                codigo
            }
        ))
        reset()

        Swal.fire({
            title: 'Agregado!',
            text: 'Modal with a custom image.',
            imageUrl: values.foto,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.foto = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })

            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Agregando',
                showConfirmButton: false,
                timer: 1500
              })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="addForm">
                <h1>Agregar Producto</h1>
                <div>
                    <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={handleInputChange} />
                    <input type="text" name="descripcion" placeholder="Descripcion" value={descripcion} onChange={handleInputChange} />
                    <input type="text" name="marca" placeholder="Marca" value={marca} onChange={handleInputChange} />
                    <input type="number" name="precio" placeholder="Precio" value={precio} onChange={handleInputChange} />
                    <input type="text" name="categoria" placeholder="Categoria" value={categoria} onChange={handleInputChange} />
                    <input type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                </div>
                <button type="submit">
                    <h2>Agregar</h2>
                </button>

            </form>

        </div>
    )
}

export default AddProduct