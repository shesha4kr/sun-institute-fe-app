import { Component, OnInit } from '@angular/core';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studName = 'First Second';
  studId = 0;
  viewAll = false;
  examsToDisplay: any;
  latestExamDetails$: any;
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
    this.studName = localStorage.getItem('userName')!;
    this.studId = parseInt(localStorage.getItem('userId')!);

    //Fetch Latest Exam Details
    this.fetchExamsService.fetchLatestExamsByUserId(this.studId).subscribe(
      (response) => {
        this.latestExamDetails$ = response;
        this.examsToDisplay = this.latestExamDetails$;
      },
      (error) => {}
    );
  }

  handleClick() {
    this.viewAll = !this.viewAll;

    //Fetch All Exam Details if value of this.allExamDetails$ is NULL
    this.allExamDetails$ ||
      this.fetchExamsService.fetchAllExams(this.studId).subscribe(
        (response) => {
          this.allExamDetails$ = response;
          this.examsToDisplay = this.allExamDetails$;
        },
        (error) => {}
      );

    if (this.viewAll) {
      this.examsToDisplay = this.allExamDetails$;
    } else {
      this.examsToDisplay = this.latestExamDetails$;
    }
  }
}
