import { PageComponent } from './components/page';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = document.querySelector('document')! as HTMLElement;
  }
}
