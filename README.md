
---

# Constellation

![Constellation Banner](https://d.newsweek.com/en/full/1926116/superbubble-n44.jpg?w=1200&f=a06e69890187c2802df69fe4d3e72481)

**Constellation** es una aplicación web de gestión académica orientada a facilitar la administración de actividades, cursos, criterios, rúbricas, grupos y usuarios. Desarrollado con el marco **NestJS**, este proyecto es parte del curso de **Computación en Internet 3** y se encuentra desplegado en **Vercel**. Se utilizó una metodología ágil de desarrollo para asegurar un flujo iterativo y flexible, permitiendo así una rápida adaptación a nuevos requisitos o cambios en el ámbito educativo. Este sistema permite a los docentes gestionar todo el ciclo de evaluación y formación en un entorno académico de forma sencilla y eficaz.

## Tabla de Contenidos

- [Equipo de Desarrollo](#equipo-de-desarrollo)
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características Principales](#características-principales)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
- [Rutas y Funcionalidades](#rutas-y-funcionalidades)
- [Pruebas](#pruebas)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)

## Equipo de Desarrollo

Este proyecto ha sido desarrollado por el siguiente equipo:

- **Juan Felipe Madrid** - A00381242
- **Luis Fernando Pinillos** - A00381323
- **Darwin Andrés Lenis** - A00381657
- **Juan David Patiño** - A00381293
- **Daniel Montezuma** - A00382231
- **Diego Fernando Mueses** - A00382021

## Descripción del Proyecto

**Constellation** facilita a los docentes y administradores la gestión completa del ciclo de evaluación y formación en entornos académicos. La aplicación permite manejar cursos, actividades, criterios de evaluación, rúbricas, grupos de trabajo y usuarios de manera intuitiva y eficiente.

### Objetivos

- Simplificar la administración académica.
- Proveer una interfaz amigable para docentes y estudiantes.
- Asegurar la flexibilidad y escalabilidad del sistema.
- Implementar una metodología ágil para adaptarse rápidamente a cambios.

## Tecnologías Utilizadas

- **Backend**: NestJS, TypeORM
- **Base de Datos**: PostgreSQL / SQLite
- **Autenticación**: JWT
- **Despliegue**: Vercel
- **Otras Herramientas**: Node.js, TypeScript, Jest

## Características Principales

- **Gestión de Usuarios**: Creación, actualización y eliminación de usuarios con roles definidos.
- **Administración de Cursos**: Creación y gestión de cursos, asignación de usuarios y formación de equipos.
- **Evaluaciones**: Definición de criterios y rúbricas, asignación de notas.
- **Subida de Archivos**: Integración para subir y procesar archivos de estudiantes en formato Excel.
- **Seguridad**: Autenticación y autorización mediante JWT.

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes programas y herramientas:

1. **Node.js**: [Descargar Node.js](https://nodejs.org/)
2. **NestJS CLI**: Instalación global mediante:
   ```bash
   npm install -g @nestjs/cli
   ```
3. **Base de Datos**: PostgreSQL o SQLite.

## Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/lpinillos/constellation_project_backend.git
cd constellation_project_backend
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

```env
# Configuración de Base de Datos
DB_HOST=tu_host_de_base_de_datos
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=usuario_de_tu_base_de_datos
DB_PASSWORD=tu_contraseña_de_base_de_datos
DB_PORT=puerto_de_base_de_datos

# Configuración de JSON Web Token (JWT)
JWT_SECRET=tu_clave_secreta_para_jwt
JWT_EXPIRES_IN=tiempo_de_expiración_del_token
```

### 4. Conectar con la Base de Datos

Asegúrate de que tu base de datos esté activa y que las credenciales en el archivo `.env` sean correctas.

## Ejecución de la Aplicación

Para iniciar la aplicación en modo de desarrollo:

```bash
npm run start:dev
```

Accede a la aplicación en tu navegador a través de [http://localhost:3000](http://localhost:3000).

## Rutas y Funcionalidades

### Gestión de Actividades

| Método | Ruta                | Descripción                            | Permisos        |
|--------|---------------------|----------------------------------------|------------------|
| GET    | /activities         | Obtener todas las actividades          | Público          |
| GET    | /activities/:id     | Obtener una actividad por ID           | Público          |
| POST   | /activities         | Crear una nueva actividad              | **Profesor**     |
| PATCH  | /activities/:id     | Actualizar una actividad existente     | **Profesor**     |
| DELETE | /activities/:id     | Eliminar una actividad                 | **Profesor**     |

### Autenticación y Gestión de Usuarios

| Método | Ruta                         | Descripción                                 | Permisos        |
|--------|------------------------------|---------------------------------------------|------------------|
| POST   | /auth                        | Crear un nuevo usuario                      | Público          |
| GET    | /auth                        | Obtener todos los usuarios                  | **Administrador**|
| GET    | /auth/:id                    | Obtener un usuario por ID                   | **Administrador**|
| PATCH  | /auth/:id                    | Actualizar datos de un usuario              | **Administrador**|
| DELETE | /auth/:id                    | Eliminar un usuario                         | **Administrador**|
| POST   | /auth/login                  | Iniciar sesión de un usuario                | Público          |
| POST   | /auth/uploadStudents/:id     | Subir archivo de estudiantes en Excel       | **Profesor**     |

### Gestión de Cursos

| Método | Ruta                                    | Descripción                                 | Permisos        |
|--------|-----------------------------------------|---------------------------------------------|------------------|
| POST   | /courses                                | Crear un nuevo curso                        | **Profesor**     |
| GET    | /courses                                | Obtener todos los cursos                    | Público          |
| GET    | /courses/:id                            | Obtener un curso por ID                     | Público          |
| PATCH  | /courses/:id                            | Actualizar un curso                         | **Profesor**     |
| DELETE | /courses/:id                            | Eliminar un curso                           | **Profesor**     |
| POST   | /courses/:courseId/user/:userId          | Asignar un usuario a un curso                | **Profesor**     |
| POST   | /courses/teams/:courseId                  | Crear grupos para un curso                   | **Profesor**     |

### Gestión de Criterios

| Método | Ruta                | Descripción                            | Permisos        |
|--------|---------------------|----------------------------------------|------------------|
| POST   | /criteria           | Crear un nuevo criterio                | **Profesor**     |
| GET    | /criteria           | Obtener todos los criterios            | Público          |
| GET    | /criteria/:id       | Obtener un criterio por ID             | Público          |
| PATCH  | /criteria/:id       | Actualizar un criterio                 | **Profesor**     |
| DELETE | /criteria/:id       | Eliminar un criterio                   | **Profesor**     |

### Gestión de Notas de Criterios

| Método | Ruta                  | Descripción                            | Permisos        |
|--------|-----------------------|----------------------------------------|------------------|
| POST   | /criteria-grade       | Crear una nueva nota de criterio       | Público          |
| GET    | /criteria-grade       | Obtener todas las notas de criterios   | Público          |
| GET    | /criteria-grade/:id   | Obtener una nota de criterio por ID    | Público          |
| PATCH  | /criteria-grade/:id   | Actualizar una nota de criterio        | Público          |
| DELETE | /criteria-grade/:id   | Eliminar una nota de criterio          | Público          |

### Gestión de Rúbricas

| Método | Ruta               | Descripción                           | Permisos        |
|--------|--------------------|---------------------------------------|------------------|
| POST   | /rubric            | Crear una nueva rúbrica               | **Profesor**     |
| GET    | /rubric            | Obtener todas las rúbricas            | Público          |
| GET    | /rubric/:id        | Obtener una rúbrica por ID            | Público          |
| PATCH  | /rubric/:id        | Actualizar una rúbrica                | **Profesor**     |
| DELETE | /rubric/:id        | Eliminar una rúbrica                  | **Profesor**     |

### Gestión de Notas de Rúbricas

| Método | Ruta                   | Descripción                           | Permisos        |
|--------|------------------------|---------------------------------------|------------------|
| POST   | /rubric-grade          | Crear una nueva nota de rúbrica        | Público          |
| GET    | /rubric-grade          | Obtener todas las notas de rúbricas    | Público          |
| GET    | /rubric-grade/:id      | Obtener una nota de rúbrica por ID     | Público          |
| PATCH  | /rubric-grade/:id      | Actualizar una nota de rúbrica         | Público          |
| DELETE | /rubric-grade/:id      | Eliminar una nota de rúbrica           | Público          |

### Gestión de Equipos

| Método | Ruta                             | Descripción                           | Permisos        |
|--------|----------------------------------|---------------------------------------|------------------|
| POST   | /team                            | Crear un nuevo equipo                 | **Profesor**     |
| GET    | /team                            | Obtener todos los equipos             | Público          |
| GET    | /team/:id                        | Obtener un equipo por ID              | Público          |
| PATCH  | /team/:id                        | Actualizar un equipo                  | **Profesor**     |
| DELETE | /team/:id                        | Eliminar un equipo                    | **Profesor**     |
| POST   | /team/:teamId/user/:userId        | Asignar un usuario a un equipo         | **Profesor**     |

### Gestión de Habilidades

| Método | Ruta                                  | Descripción                                        | Permisos |
|--------|---------------------------------------|----------------------------------------------------|----------|
| GET    | /skills                               | Obtener todas las habilidades disponibles          | Público  |
| GET    | /skills/:id                           | Obtener una habilidad por ID                       | Público  |
| POST   | /skills                               | Crear una nueva habilidad                          | Público  |
| PATCH  | /skills/:id                           | Actualizar una habilidad existente                 | Público  |
| DELETE | /skills/:id                           | Eliminar una habilidad                             | Público  |
| POST   | /skills/:skillId/user/:userId          | Agregar una habilidad a un estudiante              | Público  |



## Pruebas

Para ejecutar las pruebas unitarias y de integración:

```bash
npm run test
```

Este comando ejecutará una serie de tests que aseguran el correcto funcionamiento de las funcionalidades implementadas, incluyendo las rutas y servicios de la API.

## Dependencias

### Dependencias de Producción

```json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/config": "^3.2.3",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^10.2.0",
    "@nestjs/mapped-types": "*",
    "@nestjs/passport": "^10.0.3",
    "@nestjs/platform-express": "^10.4.4",
    "@nestjs/typeorm": "^10.0.2",
    "bcrypt": "^5.1.1",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "constellation_project": "file:",
    "multer": "^1.4.5-lts.1",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.1",
    "pg": "^8.10.0",
    "typeorm": "^0.3.15"
  }
}
```

### Dependencias de Desarrollo

```json
{
  "devDependencies": {
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/bcrypt": "^5.0.1",
    "@types/jest": "^29.5.3",
    "@types/multer": "^1.4.7",
    "@types/node": "^20.0.0",
    "jest": "^29.5.3",
    "ts-jest": "^29.0.3",
    "ts-loader": "^9.4.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.0"
  }
}
```

## Contribuciones

¡Contribuciones son bienvenidas! Si deseas aportar al proyecto, sigue estos pasos:

1. **Fork** el repositorio.
2. Crea una **rama** para tu característica (`git checkout -b feature/nueva-característica`).
3. **Confirma** tus cambios (`git commit -m 'Añadir nueva característica'`).
4. **Push** a la rama (`git push origin feature/nueva-característica`).
5. Abre un **Pull Request**.


---

¡Gracias por tu interés en **Constellation**! Esperamos que esta herramienta facilite la gestión académica en tu institución.
