import { Component, OnInit } from '@angular/core';
declare var $:JQueryStatic
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#AboutMe").css({'background-color':'#1F1F1F'});
  }

}
