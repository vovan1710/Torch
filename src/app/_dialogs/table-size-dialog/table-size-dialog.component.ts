import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-size-dialog',
  templateUrl: './table-size-dialog.component.html',
  styleUrls: ['./table-size-dialog.component.scss']
})
export class TableSizeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TableSizeDialogComponent>,) { }

  ngOnInit(): void {
  }

}
