import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../model/Usuario';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public afs: AngularFirestore) { }

  saveUsuario(Usuario: Usuario){
    const refContacto = this.afs.collection("usuarios");
    if(Usuario.uid==null){
      Usuario.uid = this.afs.createId();
    }
    refContacto.doc(Usuario.uid).set(Object.assign({}, Usuario), { merge: true})
  }
  
  getUsuarioById(nombre:string) :Observable<any>{
    return this.afs.collection("contactos", 
    ref => ref.where('nombre', '==', nombre))
              .valueChanges();
  }

}
