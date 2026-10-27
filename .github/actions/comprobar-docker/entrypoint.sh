#!/bin/sh
faltan=0
for archivo in README.md LICENSE CONTRIBUTING.md; do
  if [ -f "$archivo" ]; then
    echo "OK: existe $archivo"
  else
    echo "ERROR: falta $archivo"
    faltan=1
  fi
done

if [ "$faltan" -eq 1 ]; then
  echo "Resultado: faltan archivos de documentacion"
  exit 1
fi
echo "Resultado: todos los archivos de documentacion existen"
