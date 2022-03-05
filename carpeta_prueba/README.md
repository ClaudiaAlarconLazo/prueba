## Inicialización de proyecto
```bash
npm init -y
```

## Repositorio en GIT
Si se quiere instalar GIT en el proyecto y subirlo a un repositorio existente.
Crear un archivo README.md y seguir los siguientes pasos con comandos en la terminal.

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/ClaudiaAlarconLazo/prueba.git
git push -u origin master
```


También se puede subir un repositorio ya creado
```bash
git remote add origin https://github.com/ClaudiaAlarconLazo/prueba.git
git branch -M main
git push -u origin main
```

Para evitar que la carpeta de dependencias se cargue al repositorio:
1. Crear archivo igitignore, en carpeta raíz del proyecto.
2. Editar el archivo y agregar los elementos que deben ser ignorados al hacer push. En este caso, se ignora la carpeta node_modules.


## Instalación de dependencias

### Instalación de Bootstrap
```bash
npm install bootstrap
```

### Instalación de Express
```bash
npm install express
```

### Instalación de Express-Handlebars
```bash
npm install express-handlebars@5.3.4
```

### Instalación de JQuery
```bash
npm install jquery
```

### Instalación de Nodemon
```bash
npm install nodemon
```

### Instalación de PostgreSQL
```bash
npm install pg
```

### Instalación de Prettier
```bash
npm install -D prettier
```

## Configuración de Nodemon
Con la dependencia instalada, se edita el archivo package.json y se agrega el siguiente script:
"start": "nodemon index.js"


## Configuración de Prettier
Con la dependencia instalada:
1. Se crear un archivo .prettierrc
2. Se edita el archivo .prettierrc y se agrega la siguiente configuración:
```json
{
  "semi": true,
  "singleQuote": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "bracketSpacing": true
}
```
3. En ajustes del editor, buscar Editor: Default Formatter y seleccionar la opción Prettier-Code formatter.


