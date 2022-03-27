import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultByPips } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MultByPips,
    ExMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
