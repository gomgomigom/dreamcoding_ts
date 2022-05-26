class BaseComponent {
  protected element: HTMLElement;
  constructor() {
    this.element = element;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
