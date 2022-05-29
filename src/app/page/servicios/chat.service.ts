import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public mensajesDB: any[] = [];

  constructor(public firestore: AngularFirestore) {
    this.firestore.collection('Chat').valueChanges().subscribe(c => {
      this.mensajesDB = c;
    });
  }

  public agregarMensaje(usuario: string, fecha: string, mensaje: string) {
    this.firestore.collection('Chat').add({ usuario: usuario, fecha: fecha, mensaje: mensaje });
  }
}
