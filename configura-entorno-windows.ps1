cls
Write-Host

# CONFIGURACIÓN
# =================

function pause{ $null = Read-Host 'Pulsa ENTER para continuar...' }

# GIT
# =================

function testGIT() {
  Write-Host -NoNewline "Buscar instalacion git: "

  $isInstalled = $true
  $Version

  try { $Version = $(git version).ToString() }
  catch { $isInstalled = $false }

  if ($isInstalled) {
    Write-Host "OK ($($Version))"

    Write-Host "  Configurar git..."
    git config --local include.path ../.gitconfig

    Write-Host -NoNewline "  local include.path: "
    $out = (git config --local include.path).ToString()
    if ($out -eq "../.gitconfig") {
      Write-Host "OK"
    } else {
      Write-Host "ERROR"
    }

    Write-Host -NoNewline "  pull --rebase: "
    $out = (git config pull.rebase).ToString()
    if ($out -eq "true") {
      Write-Host "OK"
    } else {
      Write-Host "ERROR"
    }
  } else {
    Write-Host "ERROR git no esta instalado, o no se encuentra en PATH"
  }
}
testGIT

function testNVM() {
  Write-Host -NoNewline "Buscar instalacion nvm: "

  $isInstalled = $true
  $Version

  try { $Version = $(nvm version).ToString() }
  catch { $isInstalled = $false }

  if ($isInstalled) {
    Write-Host "OK ($($Version))"
  } else {
    Write-Host "ERROR nvm no esta instalado, o no se encuentra en PATH"
  }
}
testNVM

function testNODEJS() {
  Write-Host -NoNewline "Buscar instalacion Node.JS: "

  $isInstalled = $true
  $Version

  try { $Version = $(node --version).ToString() }
  catch { $isInstalled = $false }

  if ($isInstalled) {
    Write-Host "OK ($($Version))"
    Write-Host "  IMPORTANTE: Utilizar la utlima version LTS para desarrollo"
  } else {
    Write-Host "ERROR Node.JS no esta instalado, o no se encuentra en PATH"
  }
}
testNODEJS

function testYARN() {
  Write-Host -NoNewline "Buscar instalacion yarn: "

  $isInstalled = $true
  $Version

  try { $Version = $(yarn --version).ToString() }
  catch { $isInstalled = $false }

  if ($isInstalled) {
    Write-Host "OK ($($Version))"
  } else {
    Write-Host "ERROR yarn no esta instalado, o no se encuentra en PATH"
  }
}
testYARN

function testPM2() {
  Write-Host -NoNewline "Buscar instalacion pm2: "

  $isInstalled = $true
  $Version

  try { $Version = $(pm2 -s --version).ToString() }
  catch { $isInstalled = $false }

  if ($isInstalled) {
    Write-Host "OK ($($Version))"
  } else {
    Write-Host "ERROR pm2 no esta instalado, no se encuentra en PATH"
  }
}
testPM2

function testVSCODE() {
  Write-Host
  Write-Host "Sobre VSCode:"
  Write-Host "  Este script no puede comprobar la instalacion."
  Write-Host "  Es necesario instalar manualmente las siguientes extensiones:"
  Write-Host "  - ESLint"
  Write-Host "  - Prettier - Code Formatter"
}
testVSCODE

Write-Host
pause