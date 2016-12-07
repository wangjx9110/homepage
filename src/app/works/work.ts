import {Component, Input} from '@angular/core';
import {Work} from './works';
import {LinkImageComponent} from '../link_image/link_image';

@Component({
  selector: 'fountain-work',
  template: require('./work.html'),
  directives: [LinkImageComponent]
})
export class WorkComponent {
  @Input() public work: Work;
}
