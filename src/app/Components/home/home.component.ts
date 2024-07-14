import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // const cursor = document.querySelector('.cursor');

    // document.addEventListener('mousemove', (e) => {
    //   if (window.innerWidth >= 1024) {
    //     let x = e.pageX ; 
    //     let y = e.pageY ;

    //     cursor?.setAttribute('style', `background: radial-gradient(450px at ${x}px ${y}px, rgba(60, 179, 113, 0.15), transparent 80%);`);
    //   }
    //   else {
    //     cursor?.setAttribute('style', `background: radial-gradient(600px at 8px 8px, rgba(60, 179, 113, 0.15), transparent 80%);`);
    //   }
    // });

    // document.addEventListener("mouseout", () => {
    //   const cursor = document.querySelector('.cursor');
    //   cursor?.setAttribute('style', `background: radial-gradient(600px at 8px 8px, rgba(60, 179, 113, 0.15), transparent 80%);`);
    // });
  }
}
