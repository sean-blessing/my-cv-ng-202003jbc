import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "enter something";
  title = 'my-cv';
  name: string = "Sean Blessing";
  address: string = "4346 Test Way";
  phone: string = "111-222-3333";
  email: string = "test@test.com";
  displayWork: boolean = true;
  displayEdu: boolean = true;

  toggleWorkDisplay():void {
    if (this.displayWork) {
      this.displayWork = false;
    }
    else {
      this.displayWork = true;
    }
  }
}
