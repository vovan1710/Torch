import { aboutUs } from './../../_content/about-us';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public aboutUs = aboutUs;

  constructor() { }

  ngOnInit(): void {
  }

}
