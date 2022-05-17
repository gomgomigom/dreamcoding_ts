{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    value: string;
    node?: Node;
  };

  class StackImpl implements Stack {
    private _size: number;
    private node: Node = null;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      const node: Node = {
        value,
        node = this.head,
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
