import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { env } from '../../app.env';
import { Company } from '../../app.datatype';
import { MatSnackBar } from '@angular/material';

import { DBService } from '../../services/db.service';

@Component({
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: Observable<any>;
  CompanyHandler: AngularFirestoreCollection<any>;
  constructor(
    private db: DBService,
    private snck: MatSnackBar
              ) {
    this.companies = this.db.companies;
  }

  register = (companyId: string) => {this.db.register(companyId); };
}
