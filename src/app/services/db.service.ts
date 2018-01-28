import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { Text } from '../app.text';
import { async } from '@angular/core/testing';
import * as firebase from 'firebase';

@Injectable()
export class DBService  {
    companies: any[];
    news: any[];
    subs: Subscription[];
    helpMessages: Message[];
    aboutMessages: Message[];
    subscribe() {
      const CompanyHandler = this.db.collection(env.collections.companies);
      const x =  CompanyHandler.snapshotChanges().map( e => {
      this.companies = [];
      return e.map( d => ({id : d.payload.doc.id , data : d.payload.doc.data()} ));
      }).subscribe(e => {
        this.companies = e;
      });

      this.subs.push(x);

      const newsHandler = this.db.collection(env.collections.news);
      const y = newsHandler.snapshotChanges().map( e => {
        return e.map( d => ({id : d.payload.doc.id , data : d.payload.doc.data()} ));
      }).subscribe(e => {this.news = e; });

      this.subs.push(y);

      const helpHandler = this.db.collection(env.collections.help)
            .snapshotChanges().map(e => e.map( f => (f.payload.doc.data())))
            .subscribe( e => {this.helpMessages = <Message[]>e; });
      this.subs.push(helpHandler);

      const aboutHandler = this.db.collection(env.collections.about)
            .snapshotChanges().map(e => e.map( f => (f.payload.doc.data())))
            .subscribe( e => {this.aboutMessages = <Message[]>e; });
      this.subs.push(aboutHandler);

    }

    unsubscribe() {
      let x;
      while ( x = this.subs.pop()) {
        x.unsubscribe();
      }
    }

    constructor(private db: AngularFirestore,
        private auth: AngularFireAuth,
        private snck: MatSnackBar
        ) {
          this.subs = [];
         }

  register(companyId: string) {
      const myid = this.auth.auth.currentUser.uid;
      const batch = this.db.firestore.batch();
      const setUserRegistered = this.db.firestore.collection(env.collections.users)
            .doc(myid).collection(env.collections.registered).doc(companyId);
      const setRegisteredInCompany = this.db.firestore.collection(env.collections.companies)
            .doc(companyId).collection(env.collections.registered).doc(myid);
      batch.set(setUserRegistered, {created_at : firebase.database.ServerValue.TIMESTAMP});
      batch.set(setRegisteredInCompany, {created_at : firebase.database.ServerValue.TIMESTAMP});
      batch.commit().then(() => {
      this.snck.open(Text.success_register_message, null, {duration: 1000});
    }, (err) => {
      this.snck.open(Text.failure_register_message, null, {duration: 1000});
    });
  }

  isRegistered(company: string) {
    return this.db.collection(env.collections.companies).doc(company)
            .collection(env.collections.registered)
            .doc(this.auth.auth.currentUser.uid).snapshotChanges()
            .map(e => e.payload.data());
  }

  canRegister(company: string) {
    return this.db.collection(env.collections.companies)
    .doc(company).collection('canreg').doc(this.auth.auth.currentUser.uid)
     .snapshotChanges().map(e => e.payload.exists.valueOf());
  }


  isAdmin() {
      return this.db.collection(env.collections.users)
        .doc(this.auth.auth.currentUser.uid)
        .snapshotChanges().map(e => {
          return e.payload.data();
        });
  }

}

interface Message {
  title: string;
  content: string;
}
