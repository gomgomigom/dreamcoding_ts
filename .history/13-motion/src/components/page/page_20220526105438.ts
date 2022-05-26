import { BaseComponent } from './base';

export class PageComponent extends BaseComponent {
  private element: HTMLUListElement;
  constructor(element) {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }
}
