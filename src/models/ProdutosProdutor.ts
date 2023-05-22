export interface ProdutosProdutor {
    id?: string | null | undefined;
    idProduto: string;
    idProdutor: string;
}

export class ProdutosProdutor implements ProdutosProdutor {
    constructor(init?: ProdutosProdutorFormValues) {
        Object.assign(this, init);
    }
}

export class ProdutosProdutorFormValues {
    id?: string = ''
    idProduto: string = ''
    idProdutor: string = ''

    constructor(produtosProdutor?: ProdutosProdutorFormValues) {
        if (produtosProdutor) {
            this.id = produtosProdutor.id
            this.idProduto = produtosProdutor.idProduto
            this.idProdutor = produtosProdutor.idProdutor
        }
    }
}