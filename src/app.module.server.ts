import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { HomeComponent } from './app/Components/home/home.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [HomeComponent],
})
export class AppServerModule {}
