import { BaseComponent } from '../../component';

export class ImageComponent extends BaseComponent<
  HTMLImageElement | HTMLParagraphElement
> {
  constructor(title: string, url: string) {
    const element = super(`<section class="image">
    <div class="image__holder">
      <img src="" alt="" class="image__thumbnail" />
    </div>
    <p class="image__title"></p>
  </section>`);
  }
}
