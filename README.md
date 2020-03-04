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
   2. [Bloqueo de archivos](#3-2-bloqueos)
   3. [Integración de código](#3-3-integracion)
4. [Roadmap](#4-roadmap)
5. [Changelog](#5-changelog)
6. [Autores](#6-autores)
7. [Licencia](#7-licencia)

<a name="1-requisitos"></a>
## Requisitos previos

<a name="1-1-herramientas"></a>
### Herramientas necesarias

- [VS Code](https://code.visualstudio.com/)
  - **Git LFS File Locking UI** (extensión)
- [GIT](https://git-scm.com/download/win)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [Yarn](https://yarnpkg.com/)
- [PM2](https://pm2.keymetrics.io/)

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

<a name="3-2-bloqueos"></a>
### Bloqueo de archivos

Por seguridad, puede ser necesario bloquear algún archivo, para que otros miembros del equipo no puedan sobrescribir el código compartido. En estos casos se debe usar la funcionalidad proporcionada por `git lfs`.

Mediante la extensión **Git LFS File Locking UI** de VS Code se pueden bloquear y desbloquear los archivos directamente desde la interfaz del IDE, sin pasar por la línea de comandos.

> **IMPORTANTE:**
> 
> Los comandos deben bloquearse **SIEMPRE** en la rama `master`.
> De este modo, el bloqueo se extenderá al resto de ramas del repositorio.
> Y **SIEMPRE** deberán desbloquearse en cuanto se haya terminado el trabajo sobre el archivo afectado.

<a name="3-3-integracion"></a>
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