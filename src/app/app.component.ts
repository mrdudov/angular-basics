import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService]
})
export class AppComponent {

  // constructor(private appCounterService: AppCounterService) {} ???
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}

}
