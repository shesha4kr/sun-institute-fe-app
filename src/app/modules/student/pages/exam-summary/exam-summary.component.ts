import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';

@Component({
  selector: 'exam-summary',
  templateUrl: './exam-summary.component.html',
  styleUrls: ['./exam-summary.component.css'],
})
export class ExamSummaryComponent implements OnInit {
  exams: any;
  userName = 'DEFAULT';

  constructor(
    private fetchExamsService: FetchExamsByUsernameService,
    private activatedRoute: ActivatedRoute
  ) {
    /* Accessing Query Param */
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.userName = queryParam.userName || this.userName;
    });
  }

  ngOnInit(): void {
    /* Calling service to Fetch Exams By UserName */
    this.fetchExamsService.getAllExams(this.userName).subscribe((data: any) => {
      console.log(data);
      this.exams = data;
    });
  }
}
