# **HENSP Frontend Test**

### Resumen

En esta prueba deberás realizar una interfaz sencilla que consume un backend previamente realizado, utilizando **Axios** para las peticiones HTTP y **`simple-react-validator`** para la validación de formularios. La aplicación debe ser compatible con **React 16**.

### Alcance

Tienes un máximo de **3 horas** para la prueba.

### Historias de Usuario (requerimientos)

- Como invitado, quiero iniciar sesión dentro de la plataforma.
- Como usuario autenticado, quiero obtener una lista de todos los medicamentos disponibles en el área de farmacia, para poder consultar el nombre, proveedor, costo y precio de venta dentro de una tabla.
- Como usuario autenticado, quiero agregar nuevos medicamentos al área de farmacia.
- Como usuario autenticado, quiero editar la información de un medicamento del área de farmacia.
- Como usuario autenticado, quiero eliminar un medicamento del área de farmacia.

### Información técnica

La aplicación debe ser realizada con **React 16** (se debe usar la version node v16.16.0, puedes usar un manejador de paquetes como [NVM](https://medium.com/@diego.coder/instalar-nvm-node-version-manager-en-windows-80d6768fa183) para instalar dicha version). Utiliza **`simple-react-validator`** para la validación de formularios y **Axios** para realizar las peticiones HTTP.

Puedes utilizar librerias de UI para la aplicación, de preferencia React-Bootstrap. El diseño queda a tu criterio :)

La documentación del Backend se encuentra en https://backend-dummy.hospitaldeespecialidades.com.sv/docs. _(Por favor no borres todos los datos, recuerda que más de una persona trabajará con este API)_

Nota: Durante el login recibirás un token, éste debe ser enviado en los endpoints para crear, actualizar y eliminar en los headers asi: `Authorization: Bearer <token>`

### Requisitos

1. **Login**: El formulario de inicio de sesión debe ser validado utilizando **`simple-react-validator`**. Asegúrate de que los campos de **usuario** y **contraseña** sean validados como **requeridos**. Una vez que el usuario se autentique correctamente, se debe almacenar el token y enviarlo en los encabezados de las solicitudes subsecuentes.

2. **Obtención de Medicamentos**: Cuando un usuario esté autenticado, debe ser capaz de obtener la lista de medicamentos disponibles desde el backend utilizando **Axios**. Esta lista debe mostrar los siguientes campos: nombre, proveedor, costo y precio de venta en una tabla.

3. **Agregar Medicamentos**: El formulario para agregar un medicamento debe ser validado utilizando **`simple-react-validator`**. Los campos **nombre**, **proveedor**, **costo** y **precio de venta** deben ser **requeridos**. La solicitud para agregar el medicamento debe realizarse con **Axios** y debe enviar el token de autenticación en los encabezados.

4. **Editar Medicamentos**: Al hacer clic en un medicamento de la lista, el usuario podrá editar la información del medicamento. El formulario de edición debe ser validado de la misma manera que el formulario de **agregar**. Al enviar el formulario de edición, se debe realizar una solicitud PUT a través de **Axios**.

5. **Eliminar Medicamentos**: Los usuarios deben poder eliminar un medicamento de la lista, y al eliminarlo, se debe actualizar la vista sin tener que recargar la página. La eliminación debe realizarse a través de **Axios**.

6. **Uso de Axios**: Las peticiones de **GET**, **POST**, **PUT** y **DELETE** para interactuar con el backend deben realizarse con **Axios**. Asegúrate de configurar Axios correctamente, incluyendo el envío del token de autenticación en los encabezados de las solicitudes protegidas (para crear, actualizar y eliminar medicamentos).

### Requerimientos adicionales

- Utiliza **React-Bootstrap** para los componentes de la UI.
- La aplicación debe ser una **Single Page Application (SPA)**.
- El diseño queda a tu criterio.
- El token obtenido durante el login debe ser enviado en los encabezados de las solicitudes para crear, actualizar y eliminar medicamentos: `Authorization: Bearer <token>`.
- Se debe manejar correctamente la validación de formularios en todos los componentes usando **`simple-react-validator`**.
- En caso de que el usuario no esté autenticado, la aplicación debe redirigirlo al formulario de login.

### Entregable

Al finalizar la prueba, deberás hacer un Pull Request en el repositorio. Si tu username de Github no es fácilmente reconocible, por favor coloca tu nombre en la descripción del Pull Request.

Puedes agregar toda la información que consideres ideal para el PR.

_* Recuerda que para hacer un PR debes hacer un fork a este repositorio y clonarlo. Debes trabajar sobre éste para que sea posible._

### Puntos Extras

La siguiente lista de requerimientos incrementa tu puntaje, pero no es obligatorio:

- Utiliza _conventional commits_ para escribir tus mensajes en git.
- Diseño responsive.
- Utiliza Typescript.
- Implementa paginación.
- Utiliza librería para manejo de estado.
- Filtro de búsqueda por nombre en lista de medicamentos _(puedes usar limit=999 para obtenerlos todos, doble punto si funciona con keywords)_
- Manejo de errores 400 (bad payload), 401 (unauthorized) y 403 (forbidden).
- Tests unitarios o e2e.

### **Instrucciones de Axios**

- **GET**: Se utilizará para obtener la lista de medicamentos.
- **POST**: Se utilizará para agregar un nuevo medicamento.
- **PUT**: Se utilizará para editar un medicamento existente.
- **DELETE**: Se utilizará para eliminar un medicamento de la lista.



# HENSP Frontend Test

### Resumen

En esta prueba deberás realizar una interfaz sencilla que consume un backend previamente realizado.

### Alcance

Tienes un máximo de **3 horas** para la prueba.

### Historias de Usuario (requerimientos)

- Como invitado, quiero iniciar sesión dentro de la plataforma.

- Como usuario autenticado, quiero obtener una lista de todos los medicamentos disponibles en el área de farmacia, para poder consultar el nombre, proveedor, costo y precio de venta dentro de una tabla.

- Como usuario autenticado, quiero agregar nuevos medicamentos al área de farmacia.

- Como usuario autenticado, quiero editar la información de un medicamento del área de farmacia.

- Como usuario autenticado, quiero eliminar un medicamento del área de farmacia.

### Información técnica

La aplicación debe ser realizada con React, de preferencia como una Single Page Application (SPA).

Puedes utilizar librerias de UI para la aplicación, de preferencia React-Bootstrap. El diseño queda a tu criterio :)

La documentación del Backend se encuentra en https://backend-dummy.hospitaldeespecialidades.com.sv/docs. _(Por favor no borres todos los datos, recuerda que más de una persona trabajará con este API)_

Nota: Durante el login recibirás un token, éste debe ser enviado en los endpoints para crear, actualizar y eliminar en los headers asi: `Authorization: Bearer <token>`

### Entregable

Al finalizar la prueba, deberás grabar un vídeo explicando el API que has desarrollado y deberás hacer un Pull Request en el repositorio. Si tu username de Github no puede ser fácilmente reconocible, por favor coloca tu nombre en la descripción. 

Puedes agregar toda la información que consideres ideal para el PR.

Consejos para el vídeo:
- Intenta ser conciso en tus explicaciones e identifica las partes de tu código de las que sientas más orgullo.
- Explica el motivo de tus decisiones al escoger tecnologías, arquitectura, validaciones, etc. Considera dar los pros y contras de lo que hiciste.
- Explica más lógica de negocio que tecnicismos.

### Puntos Extras

La siguiente lista de requerimientos únicamente incrementan tu puntaje, no pasa nada si no los haces.

- Utiliza _conventional commits_ para escribir tus mensajes en git.
- Diseño responsive.
- Utiliza Typescript.
- Implementa paginación.
- Utiliza libreria para manejo de estado.
- Filtro de búsqueda por nombre en lista de medicamentos _(puedes usar limit=999 para obtenerlos todos, doble punto si funciona con keywords)_
- Manejo de errores 400 (bad payload), 401 (unauthorized) y 403 (forbidden).
- Tests unitarios o e2e.
