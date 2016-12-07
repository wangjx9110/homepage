import {Component} from '@angular/core';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {TechsComponent} from './techs/techs';
import {WorksComponent} from './works/works';
import {FooterComponent} from './footer';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  directives: [HeaderComponent, TitleComponent, TechsComponent, WorksComponent, FooterComponent]
})
export class MainComponent {}
