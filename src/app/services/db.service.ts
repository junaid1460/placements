import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { Text } from '../app.text';

@Injectable()
export class DBService  {
    companies: Observable<any>;
    constructor(private db: AngularFirestore,
        private auth: AngularFireAuth,
        private snck: MatSnackBar
        ) {
            const CompanyHandler = db.collection(env.collections.companies);
            this.companies = CompanyHandler.snapshotChanges().map( e => {
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


}

