export class BaseComponent<T extends HTMLElement> {
  protected readonly element: T;
  constructor(htmlString: string) {}
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
