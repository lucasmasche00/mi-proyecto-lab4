import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuariosDB: any[] = [];
  public usuarioLogueado: Usuario;

  constructor(public firestore: AngularFirestore) {
    this.firestore.collection('Usuarios').valueChanges().subscribe(u => {
      this.usuariosDB = u;
    });
    this.usuarioLogueado = this.getUsuarioLogueado();
  }
  ngOnInit(): void {
  }
  private getUsuarioLogueado() {
    let usuario = sessionStorage.getItem('usuario');
    if (usuario != null)
      return JSON.parse(usuario);
    return new Usuario('', '', '');
  }

  public isLogged() {
    return this.usuarioLogueado.nombre != '' && this.usuarioLogueado.clave != '' && this.usuarioLogueado.nombre != undefined && this.usuarioLogueado.clave != undefined;
  }

  public agregarUsuario(id: string, nombre: string, clave: string, fechaLogin: string) {
    this.firestore.collection('Usuarios').doc(id).set({ nombre: nombre, clave: clave, fechaLogin: fechaLogin });
  }

  public updateUsuarioFechaLogin(_id: string, _value: string) {
    let doc = this.firestore.collection('Usuarios', ref => ref.where('nombre', '==', _id));
    doc.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = <object>a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))).subscribe((_doc: any) => {
        let id = _doc[0].id; //first result of query [0]
        this.firestore.doc(`Usuarios/${id}`).update({ fechaLogin: _value });
      })
  }

  public agregarLogIngresoUsuario(nombre: string, fechaLogin: string) {
    this.firestore.collection('LogIngresoUsuarios').add({ nombre: nombre, fechaLogin: fechaLogin });
  }

  public isLoggedUser(nombre: string) {
    return this.usuarioLogueado.nombre == nombre;
  }
}
