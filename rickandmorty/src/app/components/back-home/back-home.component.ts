import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styleUrls: ['./back-home.component.css']
})
export class BackHomeComponent implements OnInit {

  @Input() url: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
