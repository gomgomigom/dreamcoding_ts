{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    value: string;
    next?: Node;
  };

  class StackImpl implements Stack {
    private _size: number;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      const node: Node = {
        value,
        next = this.node,
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
