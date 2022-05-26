import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
    <div class="image__holder">
      <img src="" alt="" class="image__thumbnail" />
    </div>
    <p class="image__title"></p>
  </section>`);
  }
}
