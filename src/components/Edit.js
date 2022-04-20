import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { editProducts } from '../Redux/actions/actionProductos';


const Edit = ({ modal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange] = useForm({
        nombre: modal.nombre,
        codigo: modal.codigo,
        descripcion: modal.descripcion,
        precio: modal.precio,
        marca: modal.marca,
        foto: modal.foto,

    })

    const { nombre, codigo, descripcion, precio, marca, foto } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProducts(codigo, values))
        console.log(values)
        handleClose()
    }

    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => handleSubmit()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre del Producto</Form.Label>
                                <Form.Control type="text" name="nombre"  value={nombre} onChange={handleInputChange} />

                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" name="descripcion"  value={descripcion} onChange={handleInputChange} />

                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="text" name="precio"  value={precio} onChange={handleInputChange} />
                                
                                <Form.Label>Marca</Form.Label>
                                <Form.Control type="text" name="marca"  value={marca} onChange={handleInputChange} />
                                
                                <Form.Label>Foto</Form.Label>
                                <Form.Control type="text" name="foto"  value={foto} onChange={handleInputChange} />

                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" name="codigo" readOnly value={codigo} />

                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    );
};

export default Edit;