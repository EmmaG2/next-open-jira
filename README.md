# Next.js - Entries app

Para correr el proyecto localmente, se necesita levantar la base de datos utilizando docker:

```bash
docker-compose up -d
```

* El -d, significa __detached__

En caso de no tener ```docker``` instalado, lo puedes instalar desde el siguiente haciendo [click en este enalace.](https://www.docker.com/)

## Mongo Db URL

```bash
mongodb://localhost:27017//entriesdb
```

## Configurar variables de entorno

Rellenar los campos del archivo __.env.template__ y renombrarlo a __.env__

## Lenar la base de datos con información de pruebas

Una vez que el proyecto esté levantado genere la información de prueba llamando al siguiente endpoint:

```js
GET http://localhost:3000/api/seed
```
