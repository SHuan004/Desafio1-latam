// Muestra el menú principal y llama a la función según la opción elegida
function mostrarMenu(): void {
  const menu: string = `
  Selecciona una opción:
  1. Operaciones Matemáticas
  2. Conversión de Temperatura
  3. Conversión de Días
  4. Cálculos con 5 Números
  5. Salir
  `;
  const opcion: string | null = prompt(menu);

  // Ejecuta la función correspondiente según la opción ingresada
  switch (opcion) {
    case "1":
      operacionesMatematicas();
      break;
    case "2":
      conversionTemperatura();
      break;
    case "3":
      conversionDias();
      break;
    case "4":
      calculosConNumeros();
      break;
    case "5":
      alert("Saliendo del programa...");
      return; // Termina la aplicación
    default:
      alert("Opción no válida, intenta de nuevo.");
  }

  // Vuelve a mostrar el menú después de ejecutar una opción
  mostrarMenu();
}

// Realiza operaciones matemáticas básicas con dos números dados por el usuario
function operacionesMatematicas(): void {
  const num1: number | null = obtenerNumero("Ingresa el primer número (mayor a 0):");
  const num2: number | null = obtenerNumero("Ingresa el segundo número (mayor a 0):");

  // Comprueba que los números sean válidos y mayores a 0
  if (num1 !== null && num2 !== null && num1 > 0 && num2 > 0) {
    const resultados = `
      Resultados:
      Suma: ${num1 + num2}
      Resta: ${num1 - num2}
      Multiplicación: ${num1 * num2}
      División: ${num1 / num2}
      Módulo: ${num1 % num2}
    `;
    alert(resultados);
  } else {
    alert("Error: Ambos valores deben ser números mayores a cero.");
  }
}

// Convierte una temperatura de Celsius a Kelvin y Fahrenheit
function conversionTemperatura(): void {
  const celsius: number | null = obtenerNumero("Ingresa la temperatura en grados Celsius:");

  // Comprueba que el valor de Celsius sea válido
  if (celsius !== null) {
    const kelvin: number = celsius + 273.15;
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    alert(`Conversión:
    Kelvin: ${kelvin}
    Fahrenheit: ${fahrenheit}`);
  } else {
    alert("Error: Debes ingresar un número válido para la temperatura.");
  }
}

// Convierte una cantidad de días a años, semanas y días restantes
function conversionDias(): void {
  const dias: number | null = obtenerNumero("Ingresa la cantidad de días:");

  // Verifica que los días sean un número válido y no negativo
  if (dias !== null && dias >= 0) {

    const años: number = Math.floor(dias / 365);
    const diasRestantesParaSemanas: number = dias % 365;
    const semanas: number = Math.floor(diasRestantesParaSemanas / 7);
    const diasRestantes: number = diasRestantesParaSemanas % 7;
    alert(`Equivalencia:
    ${años} años, ${semanas} semanas, y ${diasRestantes} días`);
  } else {
    alert("Error: Debes ingresar un número válido y mayor o igual a cero para los días.");
  }
}

// Pide al usuario 5 números y calcula la suma y el promedio
function calculosConNumeros(): void {
  const numeros: number[] = []; // Almacena los números ingresados

  // Pide 5 números al usuario
  for (let i = 0; i < 5; i++) {
    const numero: number | null = obtenerNumero(`Ingresa el número ${i + 1}:`);

    // Verifica cada número y muestra un error si alguno es inválido
    if (numero === null) {
      alert("Error: Debes ingresar un número válido.");
      return;
    }
    numeros.push(numero); // Añade el número a la lista
  }

  // Calcula y muestra la suma y el promedio de los números
  const suma: number = numeros.reduce((acc, num) => acc + num, 0);
  const promedio: number = suma / numeros.length;
  alert(`Resultados:
  Suma: ${suma}
  Promedio: ${promedio}`);
}

// Pide un número al usuario y devuelve `null` si no es válido
function obtenerNumero(mensaje: string): number | null {
  const entrada: string | null = prompt(mensaje);
  const numero: number = entrada !== null ? Number(entrada) : NaN;
  return isNaN(numero) ? null : numero;
}

// Inicia la aplicación mostrando el menú principal
mostrarMenu();
