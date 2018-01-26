import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { env } from '../../app.env';
import { Company } from '../../app.datatype';
import { MatSnackBar } from '@angular/material';

import { DBService } from '../../services/db.service';
import { WindowService } from '../../services/window.service';

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
    private snck: MatSnackBar
              ) {
  }

  register = (companyId: string) => {this.db.register(companyId); };
}
