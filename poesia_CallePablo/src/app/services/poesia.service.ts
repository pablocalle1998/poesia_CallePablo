import { Injectable } from '@angular/core';
import { poesia } from '../model/poesia';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class poesiasService {

  constructor(public afs: AngularFirestore) { }


  savepoesia(poesia : poesia){

    const refpoesia = this.afs.collection("poesias");

    if(poesia.uid==null){
      poesia.uid = this.afs.createId();
    } 

    refpoesia.doc(poesia.uid).set(Object.assign({}, poesia), {merge: true})


  }


  getpoesias(): Observable<any[]>{

    return this.afs.collection("poesias").valueChanges();
  }
}
