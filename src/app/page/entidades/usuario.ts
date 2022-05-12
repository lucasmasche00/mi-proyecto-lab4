export class Usuario {
    public nombre: string;
    public clave: string;
    public fechaLogin: string;

    constructor(nombre: string, clavePura: string, fechaLogin: string) {
        this.nombre = nombre;
        this.clave = Usuario.codificar(clavePura);
        this.fechaLogin = '';
    }

    public static codificar(palabra: string): string {
        let caracteres = Array.from(palabra)
        let sumaCaracteres = 0;
        for (let i = 0; i < caracteres.length; i++) {
            if (!Usuario.validateAsciiCode(caracteres[i]))
                return '';
            const caracterAsciiCode = caracteres[i].charCodeAt(0);
            if (i % 2 == 0)
                caracteres[i] = String.fromCharCode(caracterAsciiCode - 3)
            else
                caracteres[i] = String.fromCharCode(caracterAsciiCode + 1)
            sumaCaracteres += caracterAsciiCode;
        }
        let ultimoCaracter = String.fromCharCode(sumaCaracteres % caracteres.length);
        Usuario.validateAsciiCode(ultimoCaracter) ? caracteres.push(ultimoCaracter) : caracteres.push(String.fromCharCode(90));
        return Usuario.arrayCharToString(caracteres);
    }

    private static validateAsciiCode(char: string): boolean {
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
