import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__player">
    <iframe width="800" height="500" class="video__iframe" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h3 class="video__title"></h3>
  </section>
  `);

    const videoElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;

    videoElement.src = this.convertedUrl(url);

    const videoTitle = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    videoTitle.textContent = title;
  }

  private convertedUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    console.log(match);
    console.log('---');
    console.log(videoId);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
