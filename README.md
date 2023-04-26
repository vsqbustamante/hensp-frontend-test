# HENSP Backend Test

### Resumen

En esta prueba deberás realizar una interfaz sencilla que consume un backend previamente realizado.

### Alcance

Tienes un máximo de **3 horas** para la prueba.

### Historias de Usuario (requerimientos)

- Como invitado, quiero iniciar sesión dentro de la plataforma.

- Como invitado, quiero obtener una lista de todos los medicamentos disponibles en el área de farmacia, para poder consultar el nombre, proveedor, costo y precio de venta dentro de una tabla.

- Como usuario autenticado, quiero agregar nuevos medicamentos al área de farmacia.

- Como usuario autenticado, quiero editar la información de un medicamento del área de farmacia.

- Como usuario autenticado, quiero eliminar un medicamento del área de farmacia.

### Información técnica

La aplicación debe ser realizada con React, de preferencia como una Single Page Application (SPA).

Puedes utilizar librerias de UI para la aplicación, de preferencia React-Bootstrap. El diseño queda a tu criterio :)

La documentación del Backend se encuentra en https://backend-dummy.hospitaldeespecialidades.com.sv/docs. _(Por favor no borres todos los datos, recuerda que más de una persona trabajará con este API)_

Nota: Durante el login recibirás un token, éste debe ser enviado en los endpoints para crear, actualizar y eliminar en los headers asi: `Authorization: Bearer <token>`

### Entregable

Al finalizar la prueba, deberás hacer un Pull Request en el repositorio. Si tu username de Github no puede ser fácilmente reconocible, por favor coloca tu nombre en la descripción. 

Puedes agregar toda la información que consideres ideal para el PR.

_* Recuerda que para hacer un PR debes hacer un fork a este repositorio y clonarlo. Debes trabajar sobre éste para que sea posible_


### Puntos Extras

La siguiente lista de requerimientos únicamente incrementan tu puntaje, no pasa nada si no los haces.

- Utiliza _conventional commits_ para escribir tus mensajes en git.
- Diseño responsive.
- Utiliza Typescript.
- Filtro de búsqueda por nombre en lista de medicamentos _(doble punto si funciona con keywords)_.
- Manejo de errores 400 (bad payload) y 401 (unauthorized).
- Tests unitarios o e2e.