import { BaseComponent } from '../component';

export class PageComponent extends BaseComponent<T extends HTMLElement> {
  constructor(element: T) {
    super(element);
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }
}
