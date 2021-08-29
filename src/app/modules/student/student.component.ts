import { Component, OnInit } from '@angular/core';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studDetails: any;
  latestExamDetails: any;
  viewAll = false;
  allExamDetails$: any;

  constructor(
    private _sharedService: SharedService,
    private fetchExamsService: FetchExamsByUsernameService
  ) {
    //Inform Toolbar that its Student Module
    this._sharedService.emitChange('Student');
  }

  ngOnInit(): void {
    //Fetch Necessary Items from LocalStorage
    this.studDetails = JSON.parse(localStorage.getItem('studDetails')!);
    this.latestExamDetails = JSON.parse(
      localStorage.getItem('latestExamDetails')!
    );

    this.latestExamDetails.totalStudents = localStorage.getItem('totalStuds');
    this.latestExamDetails.totalStudBehind =
      localStorage.getItem('totalStudsBehind');
    this.allExamDetails$ = [this.latestExamDetails];
  }

  handleClick() {
    this.viewAll = !this.viewAll;

    //Fetch All Exam Details if User Clicked on View All
    this.viewAll &&
      this.fetchExamsService
        .getAllExams(this.studDetails.userName)
        .subscribe((response: any) => {
          console.log(response);
          this.allExamDetails$ = response;
        });

    if (this.viewAll) {
      this.fetchExamsService
        .getAllExams(this.studDetails.userName)
        .subscribe((response: any) => {
          console.log(response);
          this.allExamDetails$ = response;
        });
    } else {
      this.allExamDetails$ = [];
      this.allExamDetails$.push(this.latestExamDetails);
    }
  }
}
