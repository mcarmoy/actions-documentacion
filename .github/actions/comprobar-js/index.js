const fs = require('node:fs');

const archivos = ['README.md', 'LICENSE', 'CONTRIBUTING.md'];
let faltan = false;

for (const archivo of archivos) {
  if (fs.existsSync(archivo)) {
    console.log(`OK: existe ${archivo}`);
  } else {
    console.error(`ERROR: falta ${archivo}`);
    faltan = true;
  }
}

if (faltan) {
  console.error('Resultado: faltan archivos de documentacion');
  process.exitCode = 1;
} else {
  console.log('Resultado: todos los archivos de documentacion existen');
}
