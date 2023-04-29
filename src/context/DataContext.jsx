import { createContext, useEffect, useState } from 'react'
import { ShowAlert } from '../funciones';

const baseURL = "https://backend-dummy.hospitaldeespecialidades.com.sv/api/auth/login";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    /* - Comentario: guardamos los datos del usuario  - */
    const [datosUsuario, setDatosUsuario] = useState();
    /* - Comentario: guardamos el token  - */
    const [token, setToken] = useState(null);

    const createPost = (_body) => { // Chris 1: Como harias este paso con async await?
        fetch(baseURL, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(_body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                /* - Comentario: en caso de credenciales erroneas  - */
                if (response.statusCode == 401) {
                    ShowAlert(
                        response.message,
                        "warning"
                    );
                } else {
                    /* - Comentario: en caso de credenciales sean correctas - */;
                    setDatosUsuario(response.user);
                    setToken(response.token);
                    /** Una ves que ya guardamos el token y usuario con su nombre, redirigimos al dashboard */
                    location.href = 'http://localhost:5173/dashboard' // Chris 2: Esta es la mejor forma de redirigir?
                }
            });

    }

    return (
        <DataContext.Provider
            value={{
                createPost,
                token,
                datosUsuario
            }}
        >
            {children}
        </DataContext.Provider>
    )
}