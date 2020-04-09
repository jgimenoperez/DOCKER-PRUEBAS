# CheatSheet: pm2

[Volver a README.md](README.md)

## Descripción

Gestor de procesos para NodeJS.

## Instalación

```
// Instalar pm2 de forma global
yarn global add pm2

// Instalar pm2-windows-startup de forma global
yarn global add pm2-windows-startup
```

## Uso

Comandos comunes

```
// Administrar procesos    
pm2 restart app_name 
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name

// Muestra informacion 
pm2 list

// Muestra últimos logs 
pm2 log

// Mostrar DashBoard  
pm2 monit

// DashBoard Web
pm2 plus
```

Autorranque de procesos tras reiniciar el servidor (sistemas windows)

```
// Configura el registro de Windows para que pm2 save funcione
pm2-startup install 
pm2 start myApp.js –name mySuperApp
pm2 save            // ¡Ahora si sirve para algo!

// Reiniciamos la máquina….
pm2 status          // Tu proceso se ha guardado perfectamente
```

## Errores y soluciones

Puede ocurrir que a la hora de asignar el proceso al script de ejecución de PM2 de un error 

```
No se puede cargar el archivo C:\Program Files\nodejs\pm2.ps1 porque la ejecución de scripts está deshabilitada en este sistema.
```

Ejecutar en un PowerShell con permisos de admin `Set-ExecutionPolicy Unrestricted`.

## Información adicional

https://desarrolloweb.com/articulos/ejecutar-aplicacion-nodejs-pm2.html
