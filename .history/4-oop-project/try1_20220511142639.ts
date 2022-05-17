{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  class Lifo implements Stack {
    get readonly size(): number {
      return this.size;
    }
    constructor(public value: string);

    push();
  }
}
