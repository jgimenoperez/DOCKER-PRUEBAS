# CheatSheet: git

[Volver a README.md](README.md)

## Descripción

Sistema de control de versiones para código.

## Trabajar con repositorios

```
// Clonar repositorio remoto desde url
git clone url
```

## Trabajar con ramas

### Básicos para trabajo en local

```
// Cambiar a rama de trabajo master
git checkout master

// Descargar los últimos cambios de master
git checkout master
git pull --rebase origin

// Crear rama proyecto basada en master y cambiar a ella
git checkout master
git checkout -b proyecto

// Descargar los últimos cambios de proyecto (igual que en master)
git checkout proyecto
git pull --rebase origin

// Descargar los últimos cambios de master en proyecto
// Es decir: actualizar proyecto LOCAL con últimos cambios de master REMOTO
git checkout proyecto
git pull --rebase origin master

// Descargar los últimos cambios de master en proyecto
// Versión interactiva que permite hacer correcciones donde sea apropiado
git checkout proyecto
git fetch origin master
git rebase -i origin/master
```

### Subir cambios al servidor

```
// Crear rama vacía desde master y subir al servidor
git checkout master
git checkout -b proyecto
git push -u origin proyecto

// Añadir archivos o directorios a la zona de staging
git add archivo
git add directorio
git add .            // Añadir directorio actual completo

// Comprobar el estado de la zona de staging actual
git status

// Crear commit (punto en el histórico de cambios)
// El commit contendrá todos los cambios añadidos a la zona de staging
// El mensaje debe ser conciso pero explicativo
git commit -am "Mensaje del commit"

// Subir los commits al servidor en la rama actual
// Se pueden hacer varios commits y subirlos todos a la vez con un único push
git push origin
```

### Renombrar y borrar ramas

```
// Renombrar rama local
git branch -m nombre-viejo nombre-nuevo

// Borrar rama local
git branch -D rama

// Borrar rama remota
git push origin --delete rama
```

Proceso completo para renombrar rama local y remota

```
git checkout rama-vieja               // Cambiar a rama-vieja
git branch -m rama-vieja rama-nueva   // Renombrar
git checkout rama-nueva               // Cambiar a rama-nueva
git push origin -u rama-nueva         // Subir rama-nueva a servidor y enlazar
git push origin --delete rama-vieja   // Borrar rama-vieja de servidor
```

### Mezclar un proyecto con master (OJO!!! CUIDADO!!!)

> _**IMPORTANTE:**_
>
> Antes de integrar una rama en master:
> - Comprobar que la rama ha sido actualizada
> - Resolver conflictos, si los hay

```
// Hacer rebase desde master de la rama proyecto
git checkout proyecto
git fetch origin master
git rebase -i origin/master
git push origin

// Desde master, incorporar proyecto y borrar rama proyecto
git checkout master
git pull
git pull --rebase origin proyecto
git push origin

// Borrar ramas de proyecto local y remota, si corresponde
git branch -D proyecto
git push origin --delete proyecto
```

### Deshacer cambios

_**PENDIENTE**_

## Trabajar con bloqueos de archivos

```
// Activar funcionalidad LFS
git lfs install
```
