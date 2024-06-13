# EleccionesBot
EleccionesBot es una aplicación diseñada como proyecto de título de la carrera de Ingeniería Ejecución en Informática de la Pontificia Universidad Católica de Valparaíso. Su propósito es proporcionar acceso fácil a información sobre procesos electorales mediante el uso de un bot. Utiliza la tecnologia de modelo de lenguaje grande basados en inteligencia artificial de OpenAI.

## Integrantes
- Thomas Alonso Hughes Aranda
- Sebastian Alexis Bahamondes Astorga
 
## Dependencias 
@auth0/auth0-react
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
axios
bootstrap
cors
dotenv
express
install
nodemon
npm
openai
pg
react
react-bootstrap
react-data-table-component
react-dom
react-router-dom
web-vitals

## Instalación
1. Clona este repositorio con el comando "git clone https://github.com/ThomasHughesAranda/EleccionesBot" 

2. Navega hasta la carpeta del proyecto.

3. Ejecuta "npm install" para instalar todas las dependencias necesarias.

4. Configuración de Credenciales y Variables de Entorno:**
- OpenAI API:
  - Crea una cuenta en OpenAI y obtén las credenciales de API necesarias.
  - Crea un archivo `.env` en la raíz del proyecto y añade las credenciales de OpenAI:
  - 
    OPENAI_API_KEY=
    
    ASSISTANT_ID=

- Auth0:
  - Crea una cuenta en Auth0 para la autenticación.
  - Configura una aplicación en Auth0 y obtén las credenciales necesarias (client ID, domain).
  - En el archivo `.env`, añade las credenciales de Auth0:
    
    REACT_APP_AUTH0_DOMAIN=
    
    REACT_APP_AUTH0_CLIENT_ID=

- Base de Datos PostgreSQL:
  - Asegúrate de tener PostgreSQL instalado y configurado en tu máquina o servidor.
  - Crea las base de datos con el script eleccionesBotBd.JS que esta en la carpeta del proyecto
  - Añade las credenciales de la base de datos en el archivo `.env`:


    DB_USER=
    
    DB_PASSWORD=
    
    DB_NAME=
    
    DB_HOST=
    
    DB_PORT=

5. Ejecuta la aplicación:
   
 - Inicio del Frontend: "npm run start:frontend"

 - Inicio del Backend: "npm run start:backend"

 - Construcción de la Aplicación: "npm run build"

 - Ejecución de Pruebas: "npm test"
