export class Veiculo
{
    public id: number;
    public marca: number;
    public marca_display: string;
    public modelo: string;
    public ano: number;
    public cor: number;
    public cor_display: string;
    public foto: string | undefined;
    public combustivel: number;
    public combustivel_display: string;

    constructor() {
        this.id = 0;
        this.marca = 0;
        this.marca_display = '';
        this.modelo = '';
        this.ano = 0;
        this.cor = 0;
        this.cor_display = '';
        this.combustivel = 0;
        this.combustivel_display = '';
    }
}