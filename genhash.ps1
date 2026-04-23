# Crear genhash.js con el código para generar hash
@"
const bcrypt = require('bcryptjs');
const password = process.argv[2] || 'TuClavePUI123456';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error generando hash:', err);
    process.exit(1);
  }
  console.log(`HASH: ${hash}`);
});
"@ | Set-Content -Path genhash.js

# Ejecutar genhash.js con la clave proporcionada
param(
    [string]$Clave = "TuClaveSuperSegura123!"
)

Write-Host "Generando hash para la clave: $Clave"
$hashOutput = node genhash.js $Clave

# Extraer el hash de la salida
if ($hashOutput -match "HASH: (.+)") {
    $nuevoHash = $matches[1]
    Write-Host "Hash generado: $nuevoHash"

    # Actualizar el archivo .env reemplazando la línea de PUI_PASSWORD_HASH
    (Get-Content .env) -replace "PUI_PASSWORD_HASH=.*", "PUI_PASSWORD_HASH=$nuevoHash" | Set-Content .env

    Write-Host "Archivo .env actualizado con el nuevo hash."
} else {
    Write-Host "No se pudo generar el hash."
}
