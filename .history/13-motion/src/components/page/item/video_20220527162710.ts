import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__holder">
    <iframe width="800" height="500" class="video__thumbnail" src="https://www.youtube.com/embed/yA4d5ZydVVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="video__title"></p>
  </section>
  `);

    const videoElement = this.element.querySelector(
      '.video__thumbnail'
    )! as HTMLVideoElement;

    videoElement.src = this.convertedUrl(url);

    const videoTitle = this.element.querySelector(
      '.video__title'
    )! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }

  private convertedUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube\.com\/)|(?:youtu\.be\/))?(?:(?:watch\?v=)|(?:embed\/))?(.{11})/gm;
    const matchedUrl = url.match(regExp);
    const videoId = matchedUrl ? matchedUrl[1] || matchedUrl[0] : undefined;
    return `https://www.youtube.com/embed/${videoId}`;
  }
}
