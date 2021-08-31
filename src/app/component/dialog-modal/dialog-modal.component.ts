import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
})
export class DialogModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogModalComponent>) {}

  password = new FormControl('', Validators.required);

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
