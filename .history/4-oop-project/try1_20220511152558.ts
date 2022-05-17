{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    value: string;
    node: number;
  };

  class StackImpl implements Stack {
    private _size: number;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      this._size++;
      console.log(value);
    }
    pop() {
      this._size--;
      return 's';
    }
  }
}
