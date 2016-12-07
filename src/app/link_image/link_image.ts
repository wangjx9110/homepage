import {Component, Input} from '@angular/core';

class Info {
  constructor(
    public title: string,
    public link: string,
    public image: string
  ) {}
}

@Component({
  selector: 'fountain-link-image',
  template: require('./link_image.html')
})
export class LinkImageComponent {
  @Input() public info: Info;
}
