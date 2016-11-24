import {Component, OnInit, Inject} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openPreview(event) {
    this.router.navigateByUrl(`/preview/(preview//aux:aux)`);
  }

  closePreview(event) {
    event.preventDefault();
    this.router.navigate([{outlets: {primary: 'preview', aux: null}}], {relativeTo: this.route});
  }
}
