{
  // // JavaScript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function tsAdd(
  //   num1: number | undefined,
  //   num2: number | undefined
  // ): number | undefined {
  //   return num1 + num2;
  // }

  // // JS
  // function jsFetchNum(id) {
  //   // ...
  //   // ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS
  // function tsFetchNum(id: string): Promise<number> {
  //   // ...
  //   // ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JS => TS
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('hi');
  printName('Steve', 'Jobs');

  // Default parameter
  function printMessage(message: string = 'default') {
    console.log(message);
  }

  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}
