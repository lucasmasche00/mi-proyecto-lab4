export class Suma {
    edadUno: number = 0;
    edadDos: number = 0;
    promedio: number = 0;
    suma: number = 0;

    private sumar(): void {
        this.suma = this.edadUno + this.edadDos;
    }

    private promediar(): void {
        this.promedio = this.suma != 0 ? this.suma / 2 : 0;
    }

    public calcular(): void {
        this.sumar();
        this.promediar();
    }

    public limpiar(): void {
        this.edadUno = 0;
        this.edadDos = 0;
        this.promedio = 0;
        this.suma = 0;
    }
}
