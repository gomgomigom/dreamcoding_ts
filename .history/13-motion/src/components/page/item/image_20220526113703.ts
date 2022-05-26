import { BaseComponent } from '../../component';

export class ImageComponent extends BaseComponent<
  HTMLImageElement | HTMLParagraphElement
> {
  constructor(title: string, url: string) {}
}
