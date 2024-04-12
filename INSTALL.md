# Manual de instalación

## 1. Requerimientos

| Nombre   | Versión | Descripción                                            | Instalación                                    |
| -------- | ------- | ------------------------------------------------------ | ---------------------------------------------- |
| `NodeJS` | ^20     | Entorno de programación de JavaScript.                 | `nvm install 20` https://github.com/nvm-sh/nvm |
| `NPM`    | ^10     | Gestor de paquetes de NodeJS.                          | `npm install -g npm@10.5.0`                    |
| `PM2`    | ^5.3    | Gestor avanzado de procesos de producción para NodeJS. | `npm install -g pm2@5.3`                       |

## 2. Instalación

### Clonación del proyecto e instalación de dependencias

```bash
# Clonación del proyecto
git clone https://github.com/feliking/starter-nestjs.git

# Ingresamos dentro de la carpeta del proyecto
cd starter-nestjs

# Cambiamos a la rama develop
git checkout main

# Instalamos dependencias
npm install
```

### Archivos de configuración.

Copiar archivos `.sample` y modificar los valores que sean necesarios (para más detalles revisa la sección **Variables
de entorno**).

```bash
# Variables de entorno globales
cp .env.sample .env

# Si es la primera ves que instala el proyecto debe inicializar la base de datos en firestore
npm run setup
```

### Instalación de Firebase

```bash
# Crear los siguientes esquemas de base de datos:
npm i firebase -g

# Autenticación de firebase:
firebase login
```
