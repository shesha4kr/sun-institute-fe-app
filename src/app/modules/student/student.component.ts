import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studDetails: any;
  latestExamDetails: any;

  constructor(private _sharedService: SharedService) {
    //Inform Toolbar that its Student Module
    this._sharedService.emitChange('Student');
  }

  ngOnInit(): void {
    //Fetch Necessary Items for LocalStorage
    this.studDetails = JSON.parse(localStorage.getItem('studDetails')!);
    this.latestExamDetails = JSON.parse(
      localStorage.getItem('latestExamDetails')!
    );
  }
}
