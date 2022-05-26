import { BaseComponent } from '../component';

export class PageComponent extends BaseComponent {
  constructor() {
    super(element);
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }
}
