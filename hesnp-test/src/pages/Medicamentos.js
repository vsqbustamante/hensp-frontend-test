import React, { useEffect, useState } from 'react';
import api from '../api';
import './Medicamentos.css';
import { Table, Button, Container, Card } from 'react-bootstrap';

const Medicamentos = () => {
    const [medicamentos, setMedicamentos] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        nombre: '',
        proveedor: '',
        costo: '',
        precioVenta: '',
    });

    const fetchMedicamentos = async () => {
        try {
            const response = await api.get('/api/medicamentos');
            console.log('Respuesta de medicamentos:', response.data);

            if (response.data && Array.isArray(response.data.medicamento)) {
                setMedicamentos(response.data.medicamento);
            } else {
                console.error('La respuesta de medicamentos no es válida');
                setMedicamentos([]);
            }
        } catch (error) {
            console.error('Error al obtener los medicamentos:', error);
            alert('Error al obtener los datos.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const validateFormData = () => {
        if (!formData.nombre.trim()) {
            alert('El nombre es obligatorio.');
            return false;
        }
        if (!formData.proveedor.trim()) {
            alert('El proveedor es obligatorio.');
            return false;
        }
        if (isNaN(parseFloat(formData.costo)) || parseFloat(formData.costo) <= 0) {
            alert('El costo debe ser un número válido mayor a 0.');
            return false;
        }
        if (!formData.precioVenta.trim()) {
            alert('El precio de venta no debe estar vacío.');
            return false;
        }
        const precioVentaNum = parseInt(formData.precioVenta, 10);
        if (isNaN(precioVentaNum) || precioVentaNum <= 0) {
            alert('El precio de venta debe ser un número entero válido mayor a 0.');
            return false;
        }
        return true;
    };

    const handleAddOrUpdateMedicamento = async (e) => {
        e.preventDefault();

        if (!validateFormData()) {
            return;
        }

        const payload = {
            nombre: formData.nombre.trim(),
            proveedor: formData.proveedor.trim(),
            costo: parseFloat(formData.costo),
            precioVenta: parseInt(formData.precioVenta, 10),
        };


        console.log('Payload a enviar:', payload);

        try {
            if (formData.id) {

                const response = await api.put(`/api/medicamentos/${formData.id}`, payload);
                if (response.status === 200) {
                    alert('Medicamento actualizado con éxito');
                }
            } else {

                const response = await api.post('/api/medicamentos', payload);
                if (response.status === 201) {
                    alert('Medicamento agregado con éxito');
                }
            }

            setFormData({ id: null, nombre: '', proveedor: '', costo: '', precioVenta: '' });
            fetchMedicamentos();
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            if (error.response && error.response.data) {
                console.error('Detalles del error:', error.response.data);
                alert(`Error: ${error.response.data.message.join(', ') || 'No se pudo guardar el medicamento'}`);
            } else {
                alert('Error al guardar el medicamento. Intente de nuevo.');
            }
        }
    };


    const handleEditMedicamento = (medicamento) => {
        setFormData({
            id: medicamento.id,
            nombre: medicamento.nombre || '',
            proveedor: medicamento.proveedor || '',
            costo: (medicamento.costo !== undefined ? medicamento.costo : 0).toString(),
            precioVenta: (medicamento.precioVenta !== undefined ? medicamento.precioVenta : 0).toString(),
        });
    };


    const handleDeleteMedicamento = async (id) => {
        if (!window.confirm('¿Está seguro de que desea eliminar este medicamento?')) {
            return;
        }

        try {
            const response = await api.delete(`/api/medicamentos/${id}`);
            if (response.status === 200) {
                alert('Medicamento eliminado con éxito');
                fetchMedicamentos();
            }
        } catch (error) {
            console.error('Error al eliminar el medicamento:', error);
            alert('Error al eliminar el medicamento.');
        }
    };

    useEffect(() => {
        fetchMedicamentos();
    }, []);

    return (
        <Container className="container-centered">
            <Card className="card-medicamentos">
                <h2>Lista de Medicamentos</h2>
                <form className="form-add-medicamento" onSubmit={handleAddOrUpdateMedicamento}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="proveedor"
                        placeholder="Proveedor"
                        value={formData.proveedor}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="costo"
                        placeholder="Costo (ej: 5.99)"
                        value={formData.costo}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                    <input
                        type="number"
                        name="precioVenta"
                        placeholder="Precio de Venta (entero)"
                        value={formData.precioVenta}
                        onChange={handleInputChange}
                        required
                        min="1"
                    />

                    <Button className="button-add" type="submit">
                        {formData.id ? 'Guardar Cambios' : 'Agregar Medicamento'}
                    </Button>
                </form>

                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Table className="table-medicamentos" bordered responsive>
                        <thead style={{ position: 'sticky', top: 0, backgroundColor: '#007bff', zIndex: 1 }}>
                            <tr>
                                <th style={{ width: '30%', position: 'sticky', top: 0 }}>Nombre</th>
                                <th style={{ width: '30%', position: 'sticky', top: 0 }}>Proveedor</th>
                                <th style={{ width: '15%', position: 'sticky', top: 0 }}>Costo</th>
                                <th style={{ width: '15%', position: 'sticky', top: 0 }}>Precio de Venta</th>
                                <th style={{ width: '10%', position: 'sticky', top: 0 }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicamentos.map((med) => (
                                <tr key={med.id}>
                                    <td>{med.nombre}</td>
                                    <td>{med.proveedor}</td>
                                    <td>${med.costo.toFixed(2)}</td>
                                    <td>${med.precio_venta.toFixed(2)}</td>
                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button
                                                variant="success"
                                                size="sm"
                                                className="me-2"
                                                onClick={() => handleEditMedicamento(med)}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleDeleteMedicamento(med.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

            </Card>
        </Container>
    );
};

export default Medicamentos;
