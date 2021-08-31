import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent {
  private _currentModule = 'Login';

  @Input()
  set currentModule(value: string) {
    this._currentModule = localStorage.getItem('userType') || value;
    this.getMenuItem();
  }

  get currentModule() {
    return this._currentModule;
  }

  @Output() isDarkMode: EventEmitter<string> = new EventEmitter();
  darkMode = 'false';
  menuItems: string[] = [];

  ngOnInit(): void {}

  switchDarkMode() {
    this.darkMode === 'false'
      ? (this.darkMode = 'true')
      : (this.darkMode = 'false');
    this.isDarkMode.emit(this.darkMode);
  }

  getMenuItem() {
    if (this.currentModule === 'student') {
      this.getMenuItemsForStudents();
    } else if (this.currentModule === 'admin') {
      this.getMenuItemsForAdmin();
    }
  }

  getMenuItemsForStudents() {
    this.menuItems = ['View Profile', 'Change Password', 'Logout'];
  }

  getMenuItemsForAdmin() {
    this.menuItems = ['Logout'];
  }

  handleClick(menuItem: string) {
    if (menuItem === 'Logout') {
      localStorage.clear();
      this.router.navigate(['/']);
    } else if (menuItem === 'View Profile') {
      this.router.navigate(['/student', 'profile']);
    } else if (menuItem === 'Change Password') {
      this.router.navigate(['/student', 'update', 'password']);
    }
  }

  constructor(private router: Router) {}

  //Whenever the value of this.currentModule change, it will get called
  // ngOnChanges() {
  //   this.getMenuItem();
  // }
}
