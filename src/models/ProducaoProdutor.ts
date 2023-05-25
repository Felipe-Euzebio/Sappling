export interface ProducaoProdutor {
    id: string | null | undefined;
    idProdutor: string;
    idProduto: string;
    ano: string;
    qtdeProduzida: number;
    qtdePerda: number;
    unidadeMedida: string;
}

export class ProducaoProdutor implements ProducaoProdutor {
    constructor(init?: ProducaoProdutorFormValues) {
        Object.assign(this, init);
    }
}

export class ProducaoProdutorFormValues {
    id?: string = ''
    idProdutor: string = ''
    idProduto: string = ''
    ano: string = ''
    qtdeProduzida: number = 0
    qtdePerda: number = 0
    unidadeMedida: string = ''

    constructor(producaoProdutor?: ProducaoProdutorFormValues) {
        if (producaoProdutor) {
            this.id = producaoProdutor.id
            this.idProdutor = producaoProdutor.idProdutor
            this.idProduto = producaoProdutor.idProduto
            this.ano = producaoProdutor.ano
            this.qtdeProduzida = producaoProdutor.qtdeProduzida
            this.qtdePerda = producaoProdutor.qtdePerda
            this.unidadeMedida = producaoProdutor.unidadeMedida
        }
    }
}