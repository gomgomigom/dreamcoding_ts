export class BaseComponent<T extends HTMLElement> {
  protected readonly element: T;
  constructor(htmlString: string) {
    this.element = element;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
