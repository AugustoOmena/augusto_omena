import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {

  }
  messageVisible = false;

  showMessage() {
    this.messageVisible = true;

    setTimeout(() => {
      this.messageVisible = false;
    }, 3000);
  }

}
