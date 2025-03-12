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



FUNCION CalcularEdad:
    IMPRIMIR "Ingrese su fecha de nacimiento:"
    LEER "Año (ej: 1990):" -> anio
    LEER "Mes (1-12):" -> mes
    LEER "Día (1-31):" -> dia
    LEER "Hora (0-23):" -> hora

    fechaNacimiento <- CREAR_FECHA(anio, mes, dia, hora)
    fechaActual <- FECHA_ACTUAL()

    SI fechaNacimiento > fechaActual ENTONCES:
         IMPRIMIR "La fecha de nacimiento es en el futuro."
         TERMINAR
    FIN SI

    diferencia <- fechaActual - fechaNacimiento
    años <- diferencia.dias DIVIDIDO_POR 365
    meses <- diferencia.dias DIVIDIDO_POR 30
    semanas <- diferencia.dias DIVIDIDO_POR 7
    dias <- diferencia.dias
    horas <- (diferencia.dias * 24) + (diferencia.segundos DIVIDIDO_POR 3600)

    IMPRIMIR "Edad aproximada:"
    IMPRIMIR "Años:", años
    IMPRIMIR "Meses:", meses
    IMPRIMIR "Semanas:", semanas
    IMPRIMIR "Días:", dias
    IMPRIMIR "Horas:", horas
FIN FUNCION

INICIAR:
    LLAMAR CalcularEdad


FUNCION GenerarContrasena:
    LEER "Ingrese la longitud mínima de la contraseña (mínimo 8):" -> longitud
    SI longitud < 8 ENTONCES:
         IMPRIMIR "La longitud mínima es de 8 caracteres."
         TERMINAR
    FIN SI

    mayuscula <- ELEGIR_ALEATORIAMENTE(un_caracter_de "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    digito    <- ELEGIR_ALEATORIAMENTE(un_caracter_de "0123456789")
    especial  <- ELEGIR_ALEATORIAMENTE(un_caracter_de "!@#$%^&*()-_=+[]{};:,.<>?/~`|")

    resto <- CADENA_VACIA
    PARA i DESDE 1 HASTA (longitud - 3) HACER:
         caracterAleatorio <- ELEGIR_ALEATORIAMENTE(un_caracter_de "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?/~`|")
         CONCATENAR caracterAleatorio A resto
    FIN PARA

    contrasena <- CONCATENAR(mayuscula, digito, especial, resto)
    contrasena <- MEZCLAR_LOS_CARACTERES(contrasena)
    IMPRIMIR "Contraseña generada:", contrasena
FIN FUNCION

INICIAR:
    LLAMAR GenerarContrasena

FUNCION JuegoAhorcado:
    palabras <- ["python", "programacion", "desarrollador", "computadora", "teclado"]
    palabraOculta <- ELEGIR_ALEATORIAMENTE(palabras)
    letrasAdivinadas <- LISTA_DE_TAMAÑO(longitud_de(palabraOculta), CON_VALOR "_")
    errores <- 0
    maxErrores <- 5

    IMPRIMIR "¡Bienvenido al juego del Ahorcado!"

    MIENTRAS (errores < maxErrores) Y (existe "_" EN letrasAdivinadas) HACER:
         IMPRIMIR "Palabra:", unir_con_espacios(letrasAdivinadas)
         LEER "Ingresa una letra:" -> letra
         letra <- convertir_a_minusculas(letra)

         SI (longitud(letra) ≠ 1) O (letra NO es alfabética) ENTONCES:
              IMPRIMIR "Por favor, ingresa solo una letra."
              CONTINUAR
         FIN SI

         SI letra ESTÁ_EN palabraOculta ENTONCES:
              PARA CADA índice, caracter EN palabraOculta HACER:
                   SI caracter = letra ENTONCES:
                        letrasAdivinadas[indice] <- letra
                   FIN SI
              FIN PARA
              IMPRIMIR "¡Correcto!"
         SINO:
              errores <- errores + 1
              IMPRIMIR "Incorrecto. Errores:", errores, "/", maxErrores
         FIN SI
    FIN MIENTRAS

    SI NO EXISTE "_" EN letrasAdivinadas ENTONCES:
         IMPRIMIR "¡Felicidades! Has adivinado la palabra:", palabraOculta
    SINO:
         IMPRIMIR "Has perdido. La palabra era:", palabraOculta
    FIN SI
FIN FUNCION

INICIAR:
    LLAMAR JuegoAhorcado


FUNCION SucesionFibonacci:
    LEER "Ingrese la posición hasta la que desea la sucesión de Fibonacci:" -> n
    SI n <= 0 ENTONCES:
         IMPRIMIR "El número debe ser mayor a 0."
         TERMINAR
    FIN SI

    secuencia <- [0, 1]
    
    SI n = 1 ENTONCES:
         IMPRIMIR "Fibonacci hasta la posición 1:", [0]
    SINO SI n = 2 ENTONCES:
         IMPRIMIR "Fibonacci hasta la posición 2:", secuencia
    SINO:
         PARA i DESDE 2 HASTA n-1 HACER:
              nuevoNumero <- secuencia[i-1] + secuencia[i-2]
              AÑADIR nuevoNumero A secuencia
         FIN PARA
         IMPRIMIR "Sucesión de Fibonacci hasta la posición", n, ":", secuencia
    FIN SI
FIN FUNCION

INICIAR:
    LLAMAR SucesionFibonacci


GLOBAL:
    Usuarios <- lista vacía
    NextID <- 1

FUNCION AgregarUsuario:
    LEER "Ingrese el nombre de usuario:" -> nombre
    LEER "Ingrese la edad:" -> edad (convertir a entero)
    LEER "Ingrese la contraseña:" -> contrasena
    usuario <- DICCIONARIO { id: NextID, nombre: nombre, edad: edad, contrasena: contrasena }
    AÑADIR usuario A Usuarios
    NextID <- NextID + 1
    IMPRIMIR "Usuario agregado."
    LLAMAR ListarUsuarios
FIN FUNCION

FUNCION ListarUsuarios:
    SI Usuarios está vacía ENTONCES:
         IMPRIMIR "No hay usuarios registrados."
         TERMINAR
    FIN SI
    IMPRIMIR "Lista de usuarios:"
    PARA CADA usuario EN Usuarios HACER:
         IMPRIMIR usuario
    FIN PARA
FIN FUNCION

FUNCION EditarUsuario:
    LEER "Ingrese el ID del usuario a editar:" -> id (convertir a entero)
    PARA CADA usuario EN Usuarios HACER:
         SI usuario["id"] = id ENTONCES:
              LEER "Nuevo nombre de usuario:" -> nuevoNombre
              LEER "Nueva edad:" -> nuevaEdad (convertir a entero)
              LEER "Nueva contraseña:" -> nuevaContrasena
              usuario["nombre"] <- nuevoNombre
              usuario["edad"] <- nuevaEdad
              usuario["contrasena"] <- nuevaContrasena
              IMPRIMIR "Usuario actualizado."
              LLAMAR ListarUsuarios
              TERMINAR FUNCION
         FIN SI
    FIN PARA
    IMPRIMIR "Usuario no encontrado."
FIN FUNCION

FUNCION EliminarUsuario:
    LEER "Ingrese el ID del usuario a eliminar:" -> id (convertir a entero)
    Usuarios <- FILTRAR Usuarios PARA EXCLUIR el usuario cuyo id sea igual a id
    IMPRIMIR "Usuario eliminado (si existía)."
    LLAMAR ListarUsuarios
FIN FUNCION

FUNCION CRUDUsuarios:
    MIENTRAS (verdadero) HACER:
         IMPRIMIR "--- Menú CRUD de Usuarios ---"
         IMPRIMIR "1. Agregar usuario"
         IMPRIMIR "2. Listar usuarios"
         IMPRIMIR "3. Editar usuario"
         IMPRIMIR "4. Eliminar usuario"
         IMPRIMIR "5. Salir del CRUD"
         LEER "Seleccione una opción:" -> opcion
         
         SI opcion = "1" ENTONCES:
              LLAMAR AgregarUsuario
         SINO SI opcion = "2" ENTONCES:
              LLAMAR ListarUsuarios
         SINO SI opcion = "3" ENTONCES:
              LLAMAR EditarUsuario
         SINO SI opcion = "4" ENTONCES:
              LLAMAR EliminarUsuario
         SINO SI opcion = "5" ENTONCES:
              SALIR DEL BUCLE
         SINO:
              IMPRIMIR "Opción inválida. Intente de nuevo."
         FIN SI
    FIN MIENTRAS
FIN FUNCION

INICIAR:
    LLAMAR CRUDUsuarios

