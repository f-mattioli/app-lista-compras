export class ItemCompra {

    id: number | null;
    descricao: string;
    quantidade: number;
    precoUnitario: number | null;
    compraRealizada: boolean;

    constructor (descricao: string, quantidade: number) {
        this.id = null;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.precoUnitario = null;
        this.compraRealizada = false;
    }

}
