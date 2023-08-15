# Tasks Application

Este proyecto consta de una aplicación de gestión de tareas. El backend se ha desarrollado utilizando NestJS y MongoDB como base de datos. El frontend se ha desarrollado con React.

## Estructura del Proyecto

.
├── tasksapi/ # Carpeta del backend
└── taskfront/ # Carpeta del frontend



## Requisitos

- Node.js
- MongoDB
- npm o yarn

## Instalación y Ejecución

### Backend: tasksapi

1. **Instalación de dependencias**:

    ```bash
    cd tasksapi
    npm install
    ```

2. **Configuración**:

    Asegúrate de tener una instancia de MongoDB en ejecución. Si tus credenciales difieren de las predeterminadas, configura el archivo `.env` en la carpeta `tasksapi`.

3. **Ejecución**:

    ```bash
    npm run start:dev
    ```

### Frontend: taskfront

1. **Instalación de dependencias**:

    ```bash
    cd taskfront
    npm install
    ```

2. **Ejecución**:

    ```bash
    npm run dev
    ```

## Tecnologías Utilizadas

### Backend

- [NestJS](https://nestjs.com/)
- [Mongoose](https://mongoosejs.com/) para MongoDB.
- Librerías adicionales como `class-transformer`, `class-validator`, y más.
- Pruebas con [Jest](https://jestjs.io/).
- Formateo de código y linting con Eslint y Prettier.

### Frontend

- [React](https://es.reactjs.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- Herramienta de construcción y desarrollo con [Vite](https://vitejs.dev/).
- Estilos con [TailwindCSS](https://tailwindcss.com/).
- Formateo de código y linting con Eslint y Prettier.

## Contribuciones

Las contribuciones son bienvenidas. Abre un 'issue' para cualquier corrección, mejora o sugerencia.


