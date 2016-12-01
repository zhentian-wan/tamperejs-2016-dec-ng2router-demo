import {Component, OnInit, Input} from '@angular/core';
import {Subject} from "../../../../node_modules/rxjs/Subject";

@Component({
  selector: 'app-can-deactivated',
  templateUrl: 'can-deactivated.component.html',
  styleUrls: ['can-deactivated.component.css']
})
export class CanDeactivatedComponent implements OnInit {

  editing: boolean = false;
  typing$ = new Subject();

  constructor() {
    this.typing$
      .subscribe((val: string) => {
        if (val && val.length > 0) {
          this.editing = true
        } else {
          this.editing = false
        }
      })
  }

  ngOnInit() {
  }

  save() {
    this.editing = false;
  }

  canDeactivate() {
    if (!this.editing) {
      return true;
    }

    return confirm('You have unsaved message, are you sure to leave the page?')
  }
}
