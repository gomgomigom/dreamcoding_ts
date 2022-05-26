export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement('template');
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterend') {
    parent.insertAdjacentElement(position, this.element);
  }
}
