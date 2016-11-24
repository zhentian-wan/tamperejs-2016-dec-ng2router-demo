import {Component, ViewEncapsulation} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    router.events
      .let(obs => this.titleObservable(obs))
      .subscribe(
        (event) => {
          this.titleService.setTitle(event['title'])
        }
      )
  }

  titleObservable(obs) {
    return obs
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.route)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data);
  }
}
