import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routerConfig } from "./app.router";

import { AppComponent } from './app.component';
import { DialogContentComponent } from './materialhelper/dialog-content/dialog-content.component';
import { MaterialhelperComponent } from './materialhelper/materialhelper.component';
import { GithubService } from "./services/github.service";

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    MaterialhelperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerConfig,
    MaterialModule.forRoot()
  ],
  entryComponents: [DialogContentComponent],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
