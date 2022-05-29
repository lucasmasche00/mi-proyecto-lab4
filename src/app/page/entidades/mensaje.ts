export class Mensaje {
    usuario: string;
    mensaje: string;
    fecha: string;

    constructor(usuario: string, mensaje: string, fecha: string) {
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.fecha = fecha;
    }
}
