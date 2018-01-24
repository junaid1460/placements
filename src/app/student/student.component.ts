import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { env } from '../app.env';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  companies: Observable<any>;
  CompanyHandler: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.CompanyHandler = db.collection(env.collections.companies);
    this.companies = this.CompanyHandler.snapshotChanges().map( e => {
      return e.map( d => ({id : d.payload.doc.id , data : d.payload.doc.data()} ));
    });
  }
  add() {
    this.addCompany({name: 'Micro' });
  }
  addCompany(company: Company) {
    this.CompanyHandler.add(company);
  }
  deleteCompany(docid: string) {
    this.CompanyHandler.doc(docid).delete();
  }
}

interface  Company {
  name: string;
  ctc?: string;
  interview_date?: Date;
  preplacement_talk_date?: Date;
  description?: string;
  registration_last_date?: Date;
}
