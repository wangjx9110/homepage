import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {WorkComponent} from './work';

class Project {
  constructor(
    public name: string,
    public description: string,
    public link: string
  ) {}
}

export class Work {
  constructor(
    public logo: string,
    public title: string,
    public link: string,
    public job: string,
    public slogan: string,
    public description: string,
    public projects: Project[],
    public images: string[]
  ) {}
}

@Component({
  selector: 'fountain-works',
  template: require('./works.html'),
  directives: [WorkComponent],
  providers: [HTTP_PROVIDERS]
})
export class WorksComponent {
  public works: Work[];
  public work: Work;

  constructor(public http: Http) {
    this.getTechs().subscribe(result => this.works = result);
  }

  getTechs(): Observable<Work[]> {
    return this.http
      .get('app/works/works.json')
      .map(response => response.json());
  }
}
