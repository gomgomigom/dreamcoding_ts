export class ImageComponent {
  private element: HTMLElement;

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterend') {
    parent.insertAdjacentElement(position, this.element);
  }
}
