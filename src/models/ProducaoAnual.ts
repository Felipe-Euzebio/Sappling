export interface ProducaoAnual {
    id: string | null | undefined;
    idProdutor: string;
    idProduto: string;
    descricao: string;
    ano: number;
    qtdeProduzida: number;
    qtdePerda: number;
    unidadeMedida: string;
}

export class ProducaoAnual implements ProducaoAnual {
    constructor(init?: ProducaoAnualFormValues) {
        Object.assign(this, init);
    }
}

export class ProducaoAnualFormValues {
    id?: string = ''
    idProdutor: string = ''
    idProduto: string = ''
    descricao: string = ''
    ano: number = new Date().getFullYear()
    qtdeProduzida: number = 0
    qtdePerda: number = 0
    unidadeMedida: string = ''

    constructor(producaoAnual?: ProducaoAnualFormValues) {
        if (producaoAnual) {
            this.id = producaoAnual.id
            this.idProdutor = producaoAnual.idProdutor
            this.idProduto = producaoAnual.idProduto
            this.descricao = producaoAnual.descricao
            this.ano = producaoAnual.ano
            this.qtdeProduzida = producaoAnual.qtdeProduzida
            this.qtdePerda = producaoAnual.qtdePerda
            this.unidadeMedida = producaoAnual.unidadeMedida
        }
    }
}