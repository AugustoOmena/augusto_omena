import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app/Components/home/home.component';
import { ProjectsComponent } from './app/Components/projects/projects.component';
import { AppComponent } from './app/Components/app/app.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
