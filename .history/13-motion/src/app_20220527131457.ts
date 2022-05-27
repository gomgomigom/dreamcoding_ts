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
      'https://www.youtube.com/embed/yA4d5ZydVVQ'
    );
    video.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
