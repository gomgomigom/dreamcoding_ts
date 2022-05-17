{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function tsAdd(
    num1: number | undefined,
    num2: number | undefined
  ): number | undefined {
    return num1 + num2;
  }

  // JS
  function jsFetchNum(id) {
    // ...
    // ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS
  function tsFetchNum(id: string): Promise<number> {
    // ...
    // ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JS => TS
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('hi');
}
