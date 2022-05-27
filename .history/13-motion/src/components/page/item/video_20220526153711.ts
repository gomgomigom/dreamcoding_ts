import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__holder">
      <iframe width="500" height="300" src="" class="video__thumbnail" />
    </div>
    <p class="video__title"></p>
  </section>
  `);
    const videoElement = document.querySelector(
      '.video__thumbnail'
    )! as HTMLVideoElement;
    videoElement.src = url;

    const videoTitle = document.querySelector(
      '.video__title'
    )! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }
}
