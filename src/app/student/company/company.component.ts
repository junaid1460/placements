import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { env } from '../../app.env';
import { Company } from '../../app.datatype';
import { MatSnackBar } from '@angular/material';
import { Text } from '../../app.text';


@Component({
  templateUrl: './compoany.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: Observable<any>;
  CompanyHandler: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore,
              private auth: AngularFireAuth,
              private snck: MatSnackBar
              ) {
    this.CompanyHandler = db.collection(env.collections.companies);
    this.companies = this.CompanyHandler.snapshotChanges().map( e => {
      return e.map( d => ({id : d.payload.doc.id , data : d.payload.doc.data()} ));
    });
  }

  register(companyId: string) {
    const myid = this.auth.auth.currentUser.uid;
    const data = {  registred : true};
    this.db.collection('users')
          .doc(myid).collection('registered').doc(companyId).set(data)
          .then(() => {
            this.snck.open(Text.success_register_message, null, {duration: 1000});
          }, (err) => {
            this.snck.open(Text.failure_register_message, null, {duration: 1000});
          });
  }


  signOut() {
    this.auth.auth.signOut();
  }
}
