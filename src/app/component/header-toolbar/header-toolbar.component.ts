import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent {
  @Input() currentModule = 'login';
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
    if (this.currentModule === 'Student') {
      this.getMenuItemsForStudents();
    } else if (this.currentModule === 'Admin') {
      this.getMenuItemsForAdmin();
    }
  }

  getMenuItemsForStudents() {
    this.menuItems = [
      'View Profile',
      'Edit Profile',
      'Change Credentials',
      'Logout',
    ];
  }

  getMenuItemsForAdmin() {
    this.menuItems = ['Logout'];
  }

  handleClick(menuItem: string) {
    if (menuItem === 'Logout') {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  constructor(private router: Router) {}

  //Whenever the value of this.currentModule change, it will get called
  ngOnChanges() {
    this.getMenuItem();
  }
}
