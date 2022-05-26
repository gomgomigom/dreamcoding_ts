class BaseComponent {
  protected element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
