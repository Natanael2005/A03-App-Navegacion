# Proyecto Evaluación Diagnóstica - Ozelot Technologies

Este repositorio contiene implementaciones en Python para los algoritmos solicitados en la evaluación diagnóstica. A continuación se muestra el pseudocódigo de cada módulo para explicar la lógica del programa.

## Contenido del Proyecto

- [Palíndromo](#palíndromo)
- [Edad](#edad)
- [Contraseña](#contraseña)
- [Ahorcado](#ahorcado)
- [Fibonacci](#fibonacci)
- [CRUD de Usuarios](#crud-de-usuarios)

---

## Palíndromo

```plaintext
FUNCION ValidarPalindromo:
    LEER "Ingresa una palabra:" -> palabra
    palabra <- quitar_espacios(palabra) y convertir_a_minusculas(palabra)
    SI palabra ES IGUAL A invertir(palabra) ENTONCES:
         IMPRIMIR "La palabra es un palíndromo (válido)."
    SINO:
         IMPRIMIR "La palabra no es un palíndromo (inválido)."
FIN FUNCION

INICIAR:
    LLAMAR ValidarPalindromo
