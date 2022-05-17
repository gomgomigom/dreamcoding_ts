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

  const stack = new StackImpl(2);
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


21.11.29 엘리 git 강의 29달러 우성
21.12.09 엘리 React 강의 $160 우성
22.03.10 제로초 RN 강의 ₩64350 우성
22.04.06 엘리 js 강의 $69 우성
22.04.27 엘리 ts 강의 $110 우성