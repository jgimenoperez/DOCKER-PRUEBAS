# CheatSheet: nvm

[Volver a README.md](README.md)

## Descripción

Gestor de versiones de NodeJS.
Permite instalar y usar diferentes versiones.

## Uso

```
nvm list available          
nvm install v0.10.24        // Install a specific version number
nvm use 0.10                // Use the latest available 0.10.x release
nvm run 0.10.24 myApp.js    // Run myApp.js using node v0.10.24
nvm alias default 0.10.24   // Set default node version on a shell
```