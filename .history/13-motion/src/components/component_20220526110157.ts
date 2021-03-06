export class BaseComponent<T extends HTMLElement> {
  protected element: T;
  constructor(element: T) {
    this.element = element;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
