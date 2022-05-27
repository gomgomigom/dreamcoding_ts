import { BaseComponent } from '../../component';

class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__holder">
      <video src="" alt="" class="video__thumbnail" />
    </div>
    <p class="video__title"></p>
  </section>
  `);
    const videoElement = document.querySelector(
      '.video__thumbnail'
    )! as HTMLVideoElement;
    videoElement.src = url;
    videoElement.art = title;
  }
}
