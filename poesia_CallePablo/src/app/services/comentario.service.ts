import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Comentario } from '../model/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(public afs: AngularFirestore) { }

  saveComentarios(Comentario: Comentario){
    const refContacto = this.afs.collection("comentarios");
    if(Comentario.uid==null){
      Comentario.uid = this.afs.createId();
    }
    refContacto.doc(Comentario.uid).set(Object.assign({}, Comentario), { merge: true})
  }
  getComentarios(): Observable<any>{
    const datos= this.afs.collection("comentarios").valueChanges();
    return datos;
  }
}
