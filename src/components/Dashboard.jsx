import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ShowAlert } from "../funciones";

export const Dashboard = () => {
  /* - Comentario: recibimos el token con los datos del usuario- */
  const { token, datosUsuario } = useContext(DataContext)
  const [tituloModal, setTituloModal] = useState('')

  /* - Comentario: Eliminar - */
  const DeleteMedicamentos = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "Seguro de eliminar el medicamento ?",
      icon: "question",
      text: "El medicamento ya no se podra recuperar",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        ShowAlert("El producto fue eliminado", "success");
      } else {
        ShowAlert("El producto no fue eliminado", "info");
      }
    });
  };

  /* - Comentario: validamos el token - */
  if (token === null) {
    //location.href = 'http://localhost:5173/' // Chris 1: Por que esto esta comentado?
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> Hensp Frontend Test </a>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={() => {
              location.href = 'http://localhost:5173/'
            }}
          >
            Salir
          </button>
        </div>
      </nav>

      <div className="container pt-5">


        <div className="row m-3">
          <div className="col-md-4 offset-4">
            <div className="d-grid mx-auto">
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setTituloModal('Agrega nuevo medicamento')
                }}
              >
                <i className="fa-solid fa-circle-plus mx-1"></i>
                Añadir
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive-sm">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Costo </th>
                <th scope="col">Precio de venta </th>
                <th scope="col">Opciones </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>
                  <button
                    className="btn btn-warning mx-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setTituloModal('Edtiar medicamento')
                    }}
                  >
                    <i className="fa-solid fa-edit text-white"></i>
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => {
                      DeleteMedicamentos()
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chris 2: Como harias para que el Modal sea reutilizable en toda la aplicacion? */}

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> {tituloModal} </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="user" className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="user" className="form-label">Proveedor:</label>
                <input
                  type="text"
                  className="form-control"
                  id="proveedor"
                  name="proveedor"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="user" className="form-label">Precio de venta:</label>
                <input
                  type="text"
                  className="form-control"
                  id="precio"
                  name="precio"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-success">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
