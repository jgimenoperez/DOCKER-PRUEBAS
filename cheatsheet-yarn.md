# CheatSheet: yarn

[Volver a README.md](README.md)

## Descripción

- Gestor de paquetes y dependencias para NodeJS (alternativa a `npm`)
- Función `workspaces` (espacios de trabajo)
  - Esta función permite separar un repositorio único en varios proyectos independientes, con posibilidad de ser compilados, empaquetados y publicados por separado
  - Al mismo tiempo, puede agregar e instalar dependencias desde varios archivos `package.json` en varias carpetas, sincronizando las dependencias entre todos ellos, y reduciendo el número de llamadas al sistema de archivos

## Uso

Comandos básicos

```
// Añadir una dependencia
yarn add <paquete>


// Añadir una dependencia SÓLO de desarrollo
yarn add <paquete> --dev

// Instalar una utilidad global
yarn global add <paquete>
```

Recopilar las dependencias de todos los proyectos y las organizarlas en la raíz del repositorio

```
// Ejecutar yarn en la raíz del repositorio
yarn install
```

## Resolución de problemas

Reinstalar todas las dependencias del repositorio. 
Incluso las que ya estaban instaladas.

```
yarn install --force
```
