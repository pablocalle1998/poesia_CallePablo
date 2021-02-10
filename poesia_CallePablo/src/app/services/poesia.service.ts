import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Poesia } from '../model/Poesia';

@Injectable({
  providedIn: 'root'
})
export class PoesiaService {

  constructor(public afs: AngularFirestore) { }

  savePoesias(Poesia: Poesia){
    const refContacto = this.afs.collection("poesias");
    if(Poesia.uid==null){
      Poesia.uid = this.afs.createId();
    }
    refContacto.doc(Poesia.uid).set(Object.assign({}, Poesia), { merge: true})
  }

  getPoesias(): Observable<any>{
    const datos= this.afs.collection("poesias").valueChanges();
    return datos;
  }

}
