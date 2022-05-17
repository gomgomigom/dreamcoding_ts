{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    readonly value: string;
    readonly next?: Node;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private node = null;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      const node: Node = {
        value,
        next,
      };
      this._size++;
      console.log(value);
    }
    pop() {
      this._size--;
      return 's';
    }
  }
}
