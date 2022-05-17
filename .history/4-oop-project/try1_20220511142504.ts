{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  class Lifo implements Stack {
    constructor(public value: string);
  }
}
