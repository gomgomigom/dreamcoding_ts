class BaseComponent {
  protected element: HTMLElement;
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin');
}
