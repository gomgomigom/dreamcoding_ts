import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'random image Title',
      'https://picsum.photos/1000/500'
    );
    this.page.addChild(image);

    const note = new NoteComponent('Note title', 'Note body');
    this.page.addChild(note);

    const video = new VideoComponent(
      'you-tube title',
      'https://www.youtube.com/embed/R0HmuvWC5tg'
    );
    this.page.addChild(video);

    const todo = new TodoComponent('타이틀', '엥');
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
