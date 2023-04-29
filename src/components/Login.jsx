import { useContext, useState, useEffect } from "react"
import { ValidarCampo, Campos, ShowAlert } from "../funciones"
import { DataContext } from "../context/DataContext"
import { Dashboard } from "./Dashboard"

const defaultDatos = {
  usuario: '',
  password: ''
}

export const Login = () => { // Chris 3: Como refactorizarias este componente?

  const [datosUser, setDatosUser] = useState(defaultDatos)
  const { createPost, token } = useContext(DataContext)

  return (
    <main className="m-auto mt-5 negro p-3 rounded text-white" style={{ width: '23rem' }}>
      <h1>Inicia Sesión</h1>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (Campos.usuario === true && Campos.password === true) { // Chris 1: Como manejarias un formulario completo?
            createPost(datosUser);
            setDatosUser(defaultDatos); // Chris 2: Cual es el proposito de este paso?
            Campos.usuario = false;
            Campos.password = false;

          } else {
            ShowAlert(
              "Por favor ingrese los datos que se solicitan",
              "warning"
            );
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="user" className="form-label">Usuario:</label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            name="usuario"
            value={datosUser.usuario}
            placeholder="Por favor ingrese su usuario"
            onChange={(e) => {
              setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
          />
          <p id="msj__usuario" className="text-warning mt-1 error-activo">
            El usuario es invalido.
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={datosUser.password}
            placeholder="Por favor ingrese su contraseña"
            onChange={(e) => {
              setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
          />
          <p id="msj__password" className="text-warning mt-1 error-activo">
            La contraseña es invalido.
          </p>
        </div>
        <button className="btn naranja text-white" type="submit">Ingresar</button>
      </form>
    </main>
  )
}
