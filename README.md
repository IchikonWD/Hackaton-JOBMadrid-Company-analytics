[![CodeFactor](https://www.codefactor.io/repository/github/ichikonwd/hackaton-jobmadrid-company-analytics/badge/main)](https://www.codefactor.io/repository/github/ichikonwd/hackaton-jobmadrid-company-analytics/overview/main)

# Hackaton Challenge - JOBMadrid Backend

Resumen:

> Desde el equipo de front se está creando un panel de Networking para poder filtrar una lista de empresas de forma simple y conseguir que la conexión entre empresas y usuarios sea más fluida.
> Para mejorar más la experiéncia de usuario, en la versión V2 se quieren mostrar unas analíticas sobre las empresas que hay en la base de datos.
> Y ahí reside el reto, en generar varios endpoints que ayuden al equipo de front a montar un panel de analíticas sin tener que tratar los datos directamente desde allí.

Source: [nuwe.io](https://nuwe.io)

## Background

User stories / Objetivos

✅ Task 1 → Crear un base de datos (PostgreSQL, MySQL, Mongo, Firebase,etc) y guardar toda la lista de compañías utilizando siguiendo el esquema del JSON

✅ Task 2 → Crear un endpoint que devuelva las compañías y este ordenadas por tamaño

✅ Task 3 → Crear un endpoint que devuelva las compañías y este ordenadas por fecha de creación

✅ Task 4 → Crear un endpoint que devuelva los siguientes datos: Número de empresas que hay en cada industria, Número de empresas que hay por cada rango de tamaños, Número de empresas que hay en cada año de creación

## Tech Stack

Tech Stack utilizado para este proyecto:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Helmet](https://helmetjs.github.io/)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Colors](https://www.npmjs.com/package/colors)

## Folder Structure

Una estructura simple de carpetas que nos ayudará a organizar nuestro proyecto y a tener una mejor organización siguiendo el modelo MVC.

```
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── config
    │   ├── db.js
    ├── controllers
    │   ├── dataController.js
    ├── data
    │   ├── content.json
    ├── models
    │   ├── dataSchema.js
    ├── routes
    │   ├── dataRoutes.js
    ├── middlewares
    │   ├── errorMiddleware.js
    └── app.js
```

## Installation

```shell
    # Clone or install commands
    npm clone https://github.com/IchikonWD/Hackaton-JOBMadrid-Company-analytics.git
    cd Hackaton-JOBMadrid-Company-analytics
    npm install
```

Es necesario tener instalado el paquete [npm](https://www.npmjs.com/) para poder utilizar el comando [npm install](https://www.npmjs.com/cli/install)

## Uso

Los datos para recrear en la base de datos se encuentran dentro de la carpeta data, en el fichero content.json.

> Es necesario crear una base de datos e implementar los datos que se encuentran en el fichero content.json.

```shell
    # Run project
    npm run dev # to run the project with nodemon in development mode
    npm run start # to run the project without nodemon in development mode
```

Endpoints:

    - /api/v2/data - Devuelve todas las empresas
    - /api/v2/data/size/ - Devuelve las empresas ordenadas por tamaño
    - /api/v2/data/date/ - Devuelve las empresas ordenadas por fecha de creación
    - /api/v2/data/quantity/ - Devuelve el número de empresas por industria, por rango de tamaño y por año de creación

Estos endpoints devuelven un JSON con los datos solicitados descritos en el challenge.

## Variables de entorno

```
    NODE_ENV= development
    PORT=5000
    MONGO_URI=mongodb+srv://<Username>:<password>@<YourDatabaseInfo>?retryWrites=true&w=majority
```

## Reconocimientos

- [The art of readme](https://github.com/hackergrrl/art-of-readme)

## Contact info

> info@ichicodes.com || Ezequiel Migueles Abraira

## License

[MIT](https://opensource.org/licenses/MIT)
