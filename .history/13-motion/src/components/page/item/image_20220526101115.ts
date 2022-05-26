export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img src="" alt="" class="image__thumbnail" />
    </div>
    <p class="image__title"></p>
  </section>
  `;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterend') {
    parent.insertAdjacentElement(position, this.element);
  }
}
