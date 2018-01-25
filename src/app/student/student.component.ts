import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { env } from '../app.env';
import { Company } from '../app.datatype';
@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  companies: Observable<any>;
  CompanyHandler: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore,
              private auth: AngularFireAuth
              ) {
    this.CompanyHandler = db.collection(env.collections.companies);
    this.companies = this.CompanyHandler.snapshotChanges().map( e => {
      return e.map( d => ({id : d.payload.doc.id , data : d.payload.doc.data()} ));
    });
  }

  register(companyId: string) {
    const myid = this.auth.auth.currentUser.uid;
    const data = {  registred : true};
    this.db.collection('users').doc(myid).collection('registered').doc(companyId).set(data);
  }


  signOut() {
    this.auth.auth.signOut();
  }
}
