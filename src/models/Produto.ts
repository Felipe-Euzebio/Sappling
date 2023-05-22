export interface Produto {
    id?: string | null | undefined;
    descricao: string;
    observacao?: string;
}

export class Produto implements Produto {
    constructor(init?: ProdutoFormValues) {
        Object.assign(this, init);
    }
}

export class ProdutoFormValues {
    id?: string = ''
    descricao: string = ''
    observacao?: string = ''

    constructor(produto?: ProdutoFormValues) {
        if (produto) {
            this.id = produto.id
            this.descricao = produto.descricao
            this.observacao = produto.observacao
        }
    }
}