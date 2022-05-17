{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  class StackImpl implements Stack {
    get size(): number {
      return this.size;
    }

    push(value: string) {
      console.log(value);
    }
    pop() {
      return 's';
    }
  }
}
