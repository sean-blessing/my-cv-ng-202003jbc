import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  // a single work experience 
  //experience1: string = "Max Train Senior Bootcamp Instructor";
  experience: string[] = ["Max Train Senior Bootcamp Instructor",
                          "Manager @ The Kroger Co.",
                          "Developer @ The Kroger Co.",
                          "Sr. Consultant @ Fusion Alliance",
                          "Sr. Developer @ RCI",
                          "Clerk @ 7-Eleven"];
  constructor() { }

  ngOnInit(): void {
  }

}
