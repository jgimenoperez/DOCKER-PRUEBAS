# acb-node-tools

## Descripción

Herramientas basadas en [NodeJS](https://github.com/nodejs/node) para conexión de aplicaciones y tratamiento automatizado de datos.

<a name="tabla-de-contenidos"></a>
## Tabla de contenidos

1. [Requisitos previos](#1-requisitos)
   1. [Herramientas necesarias](#1-1-herramientas)
   1. [Configuración de GIT](#1-2-git)
2. [Despliegue y funcionamiento](#2-despliegue)
3. [Cómo contribuir](#3-contribuciones)
   1. [Organización del repositorio](#3-1-repositorio)
   2. [Depuración](#3-2-depurar)
   3. [Bloqueo de archivos](#3-3-bloqueos)
   4. [Integración de código](#3-4-integracion)
4. [Roadmap](#4-roadmap)
5. [Changelog](#5-changelog)
6. [Autores](#6-autores)
7. [Licencia](#7-licencia)

<a name="1-requisitos"></a>
## Requisitos previos

<a name="1-1-herramientas"></a>
### Herramientas necesarias

- [Conexión con SQLSERVER](https://telerikhelper.net/2018/09/03/how-to-connect-your-node-js-app-with-sql-server/)
  https://tediousjs.github.io/node-mssql/
- [VS Code](https://code.visualstudio.com/)
  - **Git LFS File Locking UI** (extensión)
- [GIT](https://git-scm.com/download/win)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)
   Gestor de node.js.
   Permite instalar y usar diferentes versiones de node.js
   Example:
    - nvm list available  
    - nvm install v0.10.24        Install a specific version number
    - nvm use 0.10                Use the latest available 0.10.x release
    - nvm run 0.10.24 myApp.js    Run myApp.js using node v0.10.24
    - nvm alias default 0.10.24   Set default node version on a shell

- [Yarn](https://yarnpkg.com/)
   - Gestor de paquetes y dependencias para NodeJS
   - Permiten la capacidad de agregar e instalar dependencias desde varios archivos package.json en varias carpetas, sincronizando además las dependencias entre todos ellos.
   - Ejecutas yarn install en la raíz y obtienes las dependencias de todos. Así de sencillo.
- [PM2](https://pm2.keymetrics.io/)
   Gestor de procesos para NodeJS  Permite instalar y usar diferentes versiones de node.js
   Example:
    - Instalar npm npm install npm install pm2 -g
    - Administrar procesos    
       - pm2 restart app_name 
       - pm2 reload app_name
       - pm2 stop app_name
       - pm2 delete app_name
    - Muestra informacion 
       - pm2 list
    - Muestra últimos logs 
       - pm2 log
    - Mostrar DashBoard  
       - pm2 monit
    - DashBoard Web
      - pm2 plus

      Puede ocurrir que a la hora de asignar el proceso al script de ejecución de PM2 de un error
      "No se puede cargar el archivo C:\Program Files\nodejs\pm2.ps1 porque la ejecución de scripts está deshabilitada en este sistema."
      Ejecutar Set-ExecutionPolicy Unrestricted» en un powershell con permisos de admin.
      
      Para que los procesos se autorranquen al reiniciar el servidor (para sistemas windows)

      - npm install pm2 -g // instala pm2 de forma global
      - npm install pm2-windows-startup -g // instala pm2-windows-startup de forma global
      - pm2-startup install // configura el registro de Windows para que pm2 save  funcione
      - pm2 start myApp.js –name mySuperApp
      - pm2 save // ¡Ahora si sirve para algo!
      - reinicia la máquina….
      - pm2 status y verás tu proceso que se ha guardado perfectamente

      - REvisar https://desarrolloweb.com/articulos/ejecutar-aplicacion-nodejs-pm2.html

<a name="1-2-git"></a>
### Configuración de GIT

Configurar variables globales de GIT para que los commits queden bien vinculados al usuario de GitHub que los realiza.

```Shell
git config --global user.name "usuario_github"
git config --global user.email "email_github"
```

> #### Nota al margen:
> 
> Los comandos anteriores configuran las variables de entorno de GIT a nivel global. En caso de querer utilizar un usuario distinto para un repositorio en particular, se puede usar la siguiente variante, **dentro del directorio del repositorio para el que se desea una configuración diferente**.
> 
> ```Shell
> git config user.name "usuario_github"
> git config user.email "email_github"
> ```

Una vez configuradas las variables de entorno, procedemos a clonar el repositorio en local.

```Shell
git clone https://github.com/acbiluminacion/acb-node-tools.git
```

Por último, activamos la funcionalidad LFS en el repositorio local, para poder hacer uso de los bloqueos de archivos a nivel centralizado.

```Shell
git lfs install
```

<a name="2-despliegue"></a>
## Despliegue y funcionamiento

### SRVAPPS

El servidor de aplicaciones contiene tanto el código de producción, listo para ejecutar, como una copia de seguridad del repositorio completo de GitHub.

#### Rutas y sincronización

- `C:\acb\git`
  - Directorio de ejecución
  - `git pull origin/master`
- `C:\acb\git-mirror`
  - Directorio de copias de seguridad
  - Renombramos la última copia
  - `git clone --mirror`
  - Borramos la copia vieja si el comando anterior no dio ningún error.

**[TODO:]** Falta información

<a name="3-contribuciones"></a>
## Cómo contribuir

<a name="3-1-repositorio"></a>
### Organización del repositorio

- Las herramientas se gestionan en un repositorio único. El repositorio contendrá tantos proyectos como desarrollos.
- Árbol de directorios.
  - La raíz contendrá archivos comunes a todos los proyectos
  - Cada proyecto tendrá una carpeta independiente, almacenada directamente de la raíz del repositorio.
  - **[TODO:]** Idealmente se usará la herramienta [Yarn](https://yarnpkg.com/) para gestionar los proyectos dentro del repositorio. Pendiente de investigar más a fondo.
- Ramas de trabajo.
  - Principal (rama única):
    - Nombre: `master`
    - Contenido: Sólo los desarrollos estables. El contenido de esta rama se ejecuta directamente en SRVAPPS.
  - Características (tantas como desarrollos simultáneos se estén haciendo):
    - Nombre: `proyecto/característica`
    - Contenido: Pruebas, ejemplos, ideas, y en general código considerado inestable, no listo para producción.
    - **IMPORTANTE: Todas las características nuevas deberán desarrollarse sobre una rama independiente, y nunca directamente sobre `master`**
<a name="3-2-depurar"></a>
### Depuración de código
Depuración con React
   - Ver https://elijahmanor.com/cra-debug-vscode/
   - Para depurar instalar la extensión en Visual Code Debugger for Chrome.
   - Añadir en el fichero de configuración launch.json la siguiente estructura
          ``` {
               "name": "Chrome",
               "type": "chrome",
               "request": "launch",
               "url": "http://localhost:3000",
               "webRoot": "${workspaceRoot}",
               "sourceMapPathOverrides": {
                 "webpack:///src/*": "${webRoot}/*"
               }
         ```  }
   - Lanzar el servidor con nmp start        
   - Pulsar en el icono de ejecución y elegir la opcion Chrome   
  
  Depuración con fichero .js
   - Se puede utilizar el propio entorno de visual Code, especificando cual es el fichero de inicio en la configuración.
   - En el propio fichero launch.json se configurar el js de lanzamiento.
   - Tambien se puede depurar desde el propio navegdor
      -- ejecutar con node --inspect-brk .\debug.js
      -- en el navegador poner chrome://inspect/#devices y pinchar en open dedicate devtools for node
        

<a name="3-3-bloqueos"></a>
### Bloqueo de archivos

Por seguridad, puede ser necesario bloquear algún archivo, para que otros miembros del equipo no puedan sobrescribir el código compartido. En estos casos se debe usar la funcionalidad proporcionada por `git lfs`.

Mediante la extensión **Git LFS File Locking UI** de VS Code se pueden bloquear y desbloquear los archivos directamente desde la interfaz del IDE, sin pasar por la línea de comandos.

En el archivo `.gitattributes` se ha definido, a nivel de repositorio, que se podrá bloquear cualquier archivo, siempre que se encuentre dentro de la carpeta `packages`.

> **IMPORTANTE:**
> 
> Los comandos deben bloquearse **SIEMPRE** en la rama `master`.
> De este modo, el bloqueo se extenderá al resto de ramas del repositorio.
> Y **SIEMPRE** deberán desbloquearse en cuanto se haya terminado el trabajo sobre el archivo afectado.

<a name="3-4-integracion"></a>
### Integración de código

- La integración se realizará siempre mediante commits limpios usando el comando `rebase`
- Para una referencia más completa, ver la serie de tutoriales de Atlassian. Dos ejemplos:
  - [Flujo GIT basado en ramas](https://www.atlassian.com/es/git/tutorials/comparing-workflows/feature-branch-workflow)
  - [Merge vs. Rebase](https://www.atlassian.com/es/git/tutorials/merging-vs-rebasing)

<a name="4-roadmap"></a>
## Roadmap

La hoja de ruta se gestiona a través del tablero [ACB Sistemas](https://trello.com/b/rvzLbTZ8) en Trello.

<a name="5-changelog"></a>
## Changelog

El registro de cambios se mantiene en un documento independiente, en la raíz de cada proyecto. Por ejemplo, el [CHANGELOG.md](CHANGELOG.md) del proyecto matriz.

<a name="6-autores"></a>
## Autores

- [Román Porras](https://github.com/romanporras)
- [José Gimeno](https://github.com/jgimenoperez)

<a name="7-licencia"></a>
## Licencia

Copyright &copy; 2019 ACB Iluminación S.L. Todos los derechos reservados

**[⬆ volver al inicio](#tabla-de-contenidos)**
