export class ItemCompra {

    id: number | null;
    descricao: string | null;
    quantidade: number | null;
    precoUnitario: number | null;
    compraRealizada: boolean;

    constructor () {
        this.id = null;
        this.descricao = null;
        this.quantidade = null;
        this.precoUnitario = null;
        this.compraRealizada = false;
    }

}
