import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
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

    const note = new NoteComponent('Note title', 'Note body');
    note.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'you-tube title',
      'https://www.youtube.com/embed/R0HmuvWC5tg'
    );
    video.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('타이틀', '엥');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
