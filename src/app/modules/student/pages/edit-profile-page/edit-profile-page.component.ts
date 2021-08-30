import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';

@Component({
  selector: 'edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css'],
})
export class EditProfilePageComponent implements OnInit {
  form: FormGroup;
  date = new Date();
  pattern = '^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$';

  studDetails$: any;

  isSameUserName = false; // If user has changed value to same user name
  isSameDOB = false; //If user has changed value to same DOB
  isExistingUserName = false; //If user enters existing user name
  isStudProfileFetched = true; //If profile/{studId} service is not working

  constructor(private fetchStudProfile: FetchExamsByUsernameService) {
    this.form = this.initiateForm();
  }

  ngOnInit(): void {
    this.fetchStudProfile
      .fetchStudentProfile(parseInt(localStorage.getItem('userId')!))
      .subscribe(
        (response) => {
          this.studDetails$ = response;
          this.isStudProfileFetched = true;
          this.form = this.initiateForm();
        },
        (error) => {
          this.isStudProfileFetched = false;
        }
      );
  }

  handleKeyUp() {
    const enteredName = this.form.get('userName')?.value;
    this.isSameUserName = enteredName === this.studDetails$?.userName;
    const name = this.studDetails$?.allUserNames.find(
      (value: string) => value === enteredName
    );

    if (this.form.get('userName')?.valid) {
      this.isExistingUserName = name !== undefined && true;
    }
  }

  handleChangeInDOB() {
    const enteredDOB = this.form.get('dob')?.value;
    this.isSameDOB = this.sameDates(enteredDOB, this.date);
  }

  initiateForm(): FormGroup {
    this.date.setMonth(this.studDetails$?.birthMonth);
    this.date.setDate(this.studDetails$?.birthDate);
    this.date.setFullYear(this.studDetails$?.birthYear);
    const form = new FormGroup({
      firstName: new FormControl({
        value: this.studDetails$?.firstName,
        disabled: true,
      }),
      lastName: new FormControl({
        value: this.studDetails$?.lastName,
        disabled: true,
      }),
      dob: new FormControl({ value: this.date, disabled: true }),
      userName: new FormControl(this.studDetails$?.userName, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
    });

    return form;
  }

  sameDates(d1: Date, d2: Date): boolean {
    if (
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate()
    ) {
      return true;
    }
    return false;
  }
}
