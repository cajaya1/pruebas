// math.test.js
// Pruebas unitarias para las funciones factorial y fibonacci

const { factorial, fibonacci } = require('./math');

describe('Pruebas de la función factorial', () => {
  test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial con número negativo debe lanzar error', () => {
    expect(() => factorial(-3)).toThrow('El número debe ser mayor o igual a 0');
  });
});

describe('Pruebas de la función fibonacci', () => {
  test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('Fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('Fibonacci de 7 debe ser 13', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('Fibonacci con número negativo debe lanzar error', () => {
    expect(() => fibonacci(-4)).toThrow('El número debe ser mayor o igual a 0');
  });
});
