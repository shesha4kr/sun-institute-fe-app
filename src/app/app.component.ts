import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _sharedService: SharedService) {}

  currentModule = 'Login';
  isDarkMode = 'false';

  ngOnInit() {
    this._sharedService.changeEmitted$.subscribe((data) => {
      this.currentModule = data;
    });
  }

  getDarkMode(data: string) {
    this.isDarkMode = data;
  }
}
