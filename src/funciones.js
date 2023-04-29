import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/* - Comentario: mostramos las alertas con sweetalert  - */
export const ShowAlert = (msj, icon) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: msj,
        icon: icon
    })
}

/* - Comentario: Expresiones regulares - */
export const Flitro = {
    usuario: /^[a-zA-Z]{3,10}$/,
    password: /^[a-zA-Z]{3,15}$/
};

/* - Comentario: Resultados por defecto de los campos - */
export const Campos = {
    usuario: false,
    password: false
};

/* - Comentario Si el formulario es correcto - */
export const ShowMessager = (name, estado) => {
    if (estado == false) {
        document.getElementById(`msj__${name}`).classList.remove("error-activo");
    } else {
        document.getElementById(`msj__${name}`).classList.add("error-activo");
    }
};

/* - Comentario validamos los campos - */
export const ValidarCampo = (input, campo) => {
    if (Flitro[campo].test(input)) {
        Campos[campo] = true;
        ShowMessager(campo, true);
    } else {
        Campos[campo] = false;
        ShowMessager(campo, false);
    }
};

