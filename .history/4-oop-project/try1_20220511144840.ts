{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  class StackImpl implements Stack {
    private _size: number;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      console.log(value);
    }
    pop() {
      return 's';
    }
  }
}
