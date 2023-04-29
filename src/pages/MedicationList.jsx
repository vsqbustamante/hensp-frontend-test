
import { useNavigate } from 'react-router-dom';
import {useGetMedicationsQuery} from '../api/apiSlice';

function MedicationList() {

  const navigate = useNavigate();

  const {data, isError, isLoading, error} = useGetMedicationsQuery(); // Chris 1: cual es la diferencia entre mutation y query?

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    // Chris 2: Entiendo que esto es para manejar el error de autenticacion, pero existe una mejor manera de hacerlo?
    navigate('/login');
    return null;
  }

  return (
    // <ul>
    //   {data && data.medicamento.map(medication => (
    //     <li key={medication.id}>
    //       {medication.nombre}
    //       {medication.costo}
    //       {medication.precio_venta}
    //       {medication.proveedor}
    //       {medication.cretaedAt}
    //       {medication.updatedAt}
    //     </li>
    //   ))}
    // </ul>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Costo</th>
          <th>Precio Venta</th>
          <th>Proveedor</th>
          <th>Fecha Creación</th>
          <th>Fecha Actualización</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data && data.medicamento.map(medication => (
          <tr key={medication.id}>
            <td>{medication.nombre}</td>
            <td>{medication.costo}</td>
            <td>{medication.precio_venta}</td>
            <td>{medication.proveedor}</td>
            <td>{medication.createdAt}</td>
            <td>{medication.updatedAt}</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MedicationList;