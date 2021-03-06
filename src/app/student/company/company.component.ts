import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { env } from '../../app.env';
import { Company } from '../../app.datatype';
import { MatSnackBar, MatDialog, MatDialogModule } from '@angular/material';

import { DBService } from '../../services/db.service';
import { WindowService } from '../../services/window.service';

import { CompanyRegistrationDialog } from './company.registration.dialog';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-companies',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  CompanyHandler: AngularFirestoreCollection<any>;
  constructor(
    public db: DBService,
    public ws: WindowService,
    private snck: MatSnackBar,
    private dlog: MatDialog
              ) {
  }
  datestring(date: string) {
    if (date) {
      const d = new Date(date);
      return d.toDateString();
    }
    return 'Not available';
  }

  expanded(company: any) {
    if (company.handler == null) {
      company.handler2 = this.db.canRegister(company.id).subscribe(success => {
        company.canreg = true;
      }, error => {
        company.canreg = false;
      });
      company.handler = this.db.isRegistered(company.id).subscribe(e => {
        if (e) {
          company.registered = true;
        } else {
          company.registered = false;
        }
      });
    }
  }
  register(company: any) {
    const data = {
      title : `Register for ${company.data.name}?`,
      content : `Are you sure? you cannot undo this operation!`
    };
    this.dlog.open(CompanyRegistrationDialog, {
      data : data
    }).afterClosed().subscribe(e => {
      if (e === true) {
        this.db.register(company.id);
      }
    });


  }
}


