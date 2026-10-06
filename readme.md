### Ejecutar todos los test en la carpeta test
npx playwright test

## ejecutar un test en particular(nombre del test)
npx playwright test <archivo_del_test> -g"<nombre_test>"

## ejecutar n veces el mismo test
npx playwright test <archivo_del_test> -g"<nombre_test>" --repeat-each 5
