import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
