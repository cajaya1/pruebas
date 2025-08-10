// math.js
// Funciones adicionales para las pruebas unitarias

/**
 * Calcula el factorial de un número entero no negativo.
 * @param {number} n - Número entero >= 0
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  if (n < 0) throw new Error('El número debe ser mayor o igual a 0');
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calcula el término n de la serie de Fibonacci.
 * @param {number} n - Índice en la serie (>= 0)
 * @returns {number} - Valor correspondiente de Fibonacci
 */
function fibonacci(n) {
  if (n < 0) throw new Error('El número debe ser mayor o igual a 0');
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = { factorial, fibonacci };
