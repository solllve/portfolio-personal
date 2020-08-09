import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MainService} from '../services/main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'portfolio-personal';

  constructor(
    public dialog: MatDialog,
    public service: MainService
  ) {}

  ngOnInit() {
  }

  viewExperianInfo() {
    const dialogRef = this.dialog.open(DialogExperian, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openContactPanel() {
    this.service.open = true;
  }

}

@Component({
  selector: 'experian-dialog',
  templateUrl: 'experian-dialog.html',
})

export class DialogExperian {

  constructor(
    public dialogRef: MatDialogRef<DialogExperian>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
