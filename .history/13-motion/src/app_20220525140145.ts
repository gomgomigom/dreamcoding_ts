import { PageComponent } from './components/page';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

appRoot.insertAdjacentElement('afterbegin', this.element);
