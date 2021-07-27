import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 4 : 8;
  }
}
