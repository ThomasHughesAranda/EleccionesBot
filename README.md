# EleccionesBot
EleccionesBot es una aplicación para facilitar el acceso y la participación en procesos electorales mediante un bot.

## Integrantes
- Thomas Alonso Hughes Aranda
- Sebastian Alexis Bahamondes Astorga

## Tecnologías Utilizadas
- React.js
- React Router
- React Bootstrap
- Axios
- Express.js
- PostgreSQL
- Auth0 para autenticación
- Jest y Testing Library para pruebas
- dotenv para la gestión de variables de entorno
- nodemon para el reinicio automático del servidor en desarrollo
- CORS para permitir solicitudes desde diferentes dominios
- OpenAI para integración de funcionalidades de inteligencia artificial
- Bootstrap para estilos
- npm como gestor de paquetes
- Web Vitals para medir el rendimiento web

## Instalación
1.Clona este repositorio con el comando "git clone https://github.com/ThomasHughesAranda/EleccionesBot" 
2.Navega hasta la carpeta del proyecto.
3.Ejecuta "npm install" para instalar todas las dependencias necesarias.
4. **Configuración de Credenciales y Variables de Entorno:**
- **OpenAI API:** 
  - Crea una cuenta en OpenAI y obtén las credenciales de API necesarias.
  - Crea un archivo `.env` en la raíz del proyecto y añade las credenciales de OpenAI:
    OPENAI_API_KEY=
    ASSISTANT_ID=

- **Auth0:**
  - Crea una cuenta en Auth0 para la autenticación.
  - Configura una aplicación en Auth0 y obtén las credenciales necesarias (client ID, domain).
  - En el archivo `.env`, añade las credenciales de Auth0:
    REACT_APP_AUTH0_DOMAIN=
    REACT_APP_AUTH0_CLIENT_ID=

- **Base de Datos PostgreSQL:**
  - Asegúrate de tener PostgreSQL instalado y configurado en tu máquina o servidor.
  - Crea una base de datos para el proyecto.
  - Crea las tablas del proyecto con el script eleccionesBotBd.JS que esta en la carpeta del proyecto
  - Añade las credenciales de la base de datos en el archivo `.env`:
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    DB_HOST=
    DB_PORT=

5. Ejecuta la aplicación:
npm run start:frontend
npm run start:backend
npm run build
npm test
