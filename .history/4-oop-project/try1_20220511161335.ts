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
    private head?: Node;
    constructor(private capacity: number) {}
    get size(): number {
      return this._size;
    }

    push(value: string) {
      if (this.capacity === this._size) {
        throw new Error('Stack overflow');
      }
      const node: Node = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
      console.log('Now stack size :' + this._size);
    }
    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty!!');
      }
      const node = this.head;
      this.head = node.next;

      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push('abc');
  stack.push('def');
  stack.push('ghi');
  while (stack.size != 0) {
    stack.push('ghi');
    console.log(stack.pop());
    console.log(stack.pop());
  }
  console.log(stack.pop());
  console.log(stack.pop());
}
