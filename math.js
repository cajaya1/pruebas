// math.js con fallo intencional
// Funciones adicionales para provocar error en las pruebas unitarias

function factorial(n) {
  if (n < 0) throw new Error('El número debe ser mayor o igual a 0');
  if (n === 0 || n === 1) return 1;
  
  // ERROR INTENCIONAL: multiplicar por un número extra
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result + 1; // provoca error
}

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
