/**
 * Let's make a calculator 🧮
 */
{
  function calculate(command: string, num1: number, num2: number): number {
    return num1 + num2;
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
