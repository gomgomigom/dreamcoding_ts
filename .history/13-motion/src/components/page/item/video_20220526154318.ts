import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__holder">
      <iframe  src="" class="video__thumbnail" ></iframe>
    </div>
    <p class="video__title"></p>
  </section>
  `);
    const videoElement = this.element.querySelector(
      '.video__thumbnail'
    )! as HTMLVideoElement;
    videoElement.src = url;

    const videoTitle = this.element.querySelector(
      '.video__title'
    )! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }
}
