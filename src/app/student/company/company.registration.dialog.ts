import { Component , Inject} from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    template : `
    <h2 mat-dialog-title> {{ data.title }} </h2>
    <mat-dialog-content style="font-family:arial"> {{ data.content }} </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button mat-dialog-close>cancel</button>
        <button mat-button [mat-dialog-close]="true">register</button>
    </mat-dialog-actions>
    `
})
export class CompanyRegistrationDialog {
    constructor(public ref: MatDialogRef<CompanyRegistrationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
