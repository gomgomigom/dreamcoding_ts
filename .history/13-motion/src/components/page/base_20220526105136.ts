class BaseComponent {
  protected element: HTMLElement;
  constructor() {
    element = this.element;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
