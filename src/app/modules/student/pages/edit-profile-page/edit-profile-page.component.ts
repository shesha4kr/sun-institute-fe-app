import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogModalComponent } from 'src/app/component/dialog-modal/dialog-modal.component';
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
  studId = parseInt(localStorage.getItem('userId')!);

  isSameUserName = false; // If user has changed value to same user name
  isSameDOB = false; //If user has changed value to same DOB
  isExistingUserName = false; //If user enters existing user name
  isStudProfileFetched = true; //If profile/{studId} service is not working

  //New Values To Send To BE for Update
  newUserName = '';
  newBirthDate = 0;
  newBirthMonth = 0;
  newBirthYear = 0;

  constructor(
    private fetchStudProfile: FetchExamsByUsernameService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.initiateForm();
  }

  ngOnInit(): void {
    this.fetchStudentProfileDetails();
  }

  //Fetch the value of userName which user provided in form
  handleKeyUp() {
    this.newUserName = this.form.get('userName')?.value;
    this.isSameUserName = this.newUserName === this.studDetails$?.userName;
    const name = this.studDetails$?.allUserNames.find(
      (value: string) => value === this.newUserName
    );

    if (this.form.get('userName')?.valid) {
      this.isExistingUserName = name !== undefined && true;
    }
  }

  //Fetch the value of DOB which user provided in form
  handleChangeInDOB() {
    const enteredDOB = this.form.get('dob')?.value;
    this.isSameDOB = this.sameDates(enteredDOB, this.date);
  }

  //It initialises the form
  initiateForm(): FormGroup {
    this.date.setMonth(this.studDetails$?.birthMonth - 1);
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

  //It compares DOB Entered By User and Existing DOB + Assign Value of new DOB in Member Variables
  sameDates(d1: Date, d2: Date): boolean {
    this.newBirthMonth = d1.getMonth() + 1;
    this.newBirthDate = d1.getDate();
    this.newBirthYear = d1.getFullYear();
    if (
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate()
    ) {
      return true;
    }
    return false;
  }

  //To show Snackbar
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', { duration: 4000 });
  }

  //Open the Popup to enter password.
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {});

    //When user clicks on OK
    dialogRef.afterClosed().subscribe((result) => {
      //If user enters correct password
      if (result.value === this.studDetails$?.password) {
        this.fetchStudProfile
          .updateStudentPofile(this.studId, {
            userName: this.newUserName || null,
            birthDate: this.newBirthDate || null,
            birthMonth: this.newBirthMonth || null,
            birthYear: this.newBirthYear || null,
          })
          .subscribe(
            (response) => {
              console.log('GOT RESULT FROM PUT');
              const res: any = response;
              console.log('NOW WILL GET NEW PROFILE');

              if (res?.message === 'success') {
                this.fetchStudProfile
                  .fetchStudentProfile(this.studId)
                  .subscribe(
                    (response) => {
                      console.log('FETCHED PROFILE DETAILS, WILL UPDATE FORM');
                      this.studDetails$ = response;
                      this.isStudProfileFetched = true;
                      this.form = this.initiateForm();
                      console.log('FORM UPDATED');
                      this.openSnackBar('Username/DOB updated Successfully!');
                      this.router.navigate(['']);
                    },
                    (error) => {
                      console.log('ERRROR WHILE FETCHING NEW PROFILE');
                      console.log(error);
                      this.isStudProfileFetched = false;
                      this.openSnackBar('Something went wrong!');
                    }
                  );
              } else {
                console.error('Message is coming as Failed. Some Exception Must Have Thrown in BE');
                this.openSnackBar('Something went wrong!');
              }
            },
            (error) => {
              console.error('ERRROR CAME IN UPDATING NEW PROFILE (PUT):' + error);
              this.openSnackBar('Something went wrong!');
            }
          );
      } else {
        this.openSnackBar('Password is incorrect');
      }
    });
  }

  fetchStudentProfileDetails(): void {
    this.fetchStudProfile.fetchStudentProfile(this.studId).subscribe(
      (response) => {
        this.studDetails$ = response;
        this.isStudProfileFetched = true;
        this.form = this.initiateForm();
      },
      (error) => {
        console.log(error);
        this.isStudProfileFetched = false;
      }
    );
  }
}
