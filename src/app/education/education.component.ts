import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  college: string = "Indiana University, 1993, Bachelors in C.I.S.";
  highschool: string = "FJ Reitz, 1989";
  
  constructor() { }

  ngOnInit(): void {
  }

}
