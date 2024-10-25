import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../app/app.component.css']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
