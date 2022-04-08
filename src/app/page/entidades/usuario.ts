export class Usuario {
    nombre: string = 'testUser';
    clave: string = 'palanca';

    constructor() {
        sessionStorage.setItem("usuario", this.nombre);
        sessionStorage.setItem("claveHash", 'mbibkd^Z'); //palanca
    }

    private setClave(value: string): void {
        this.clave = this.codificar(value);
    }

    public login() {
        let nombreCache = sessionStorage.getItem("usuario");
        let claveHashCache = sessionStorage.getItem("claveHash");

        return console.log(nombreCache === this.nombre && claveHashCache === this.codificar(this.clave) ? 'Éxito' : 'Falló');
    }

    private codificar(palabra: string): string {
        let caracteres = Array.from(palabra)
        let sumaCaracteres = 0;
        for (let i = 0; i < caracteres.length; i++) {
            if (!this.validateAsciiCode(caracteres[i]))
                return '';
            const caracterAsciiCode = caracteres[i].charCodeAt(0);
            if (i % 2 == 0)
                caracteres[i] = String.fromCharCode(caracterAsciiCode - 3)
            else
                caracteres[i] = String.fromCharCode(caracterAsciiCode + 1)
            sumaCaracteres += caracterAsciiCode;
        }
        let ultimoCaracter = String.fromCharCode(sumaCaracteres % caracteres.length);
        this.validateAsciiCode(ultimoCaracter) ? caracteres.push(ultimoCaracter) : caracteres.push(String.fromCharCode(90));
        return Usuario.arrayCharToString(caracteres);
    }

    private validateAsciiCode(char: string): boolean {
        let isValidChar = false;

        if (char.length == 1) {
            let charCode = char.charCodeAt(0);
            isValidChar = charCode >= 32 && charCode <= 125;
        }

        return isValidChar;
    }

    private static arrayCharToString(arrayChar: Array<string>): string {
        let resultado = '';
        arrayChar.forEach(char => {
            resultado += char;
        });
        return resultado;
    }
}
