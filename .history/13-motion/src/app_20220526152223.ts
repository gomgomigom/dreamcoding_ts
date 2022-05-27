import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'random image Title',
      'https://picsum.photos/1000/500'
    );
    image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'you-tube title',
      'https://www.youtube.com/watch?v=yA4d5ZydVVQ&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9'
    );
  }
}

new App(document.querySelector('.document')! as HTMLElement);
