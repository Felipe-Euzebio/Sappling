export interface Produtor {
    id?: string | null | undefined;
    nome: string;
    celular: string;
    telefone?: string;
    endereco: string;
    tipoLogradouro: string;
    descLogradouro: string;
    cep: string;
    bairro: string;
    cidade: string;
}

export class Produtor implements Produtor {
    constructor(init?: ProdutorFormValues) {
        Object.assign(this, init);
    }
}

export class ProdutorFormValues {
    id?: string = ''
    nome: string = ''
    celular: string = ''
    telefone?: string = ''
    endereco: string = ''
    tipoLogradouro: string = ''
    descLogradouro: string = ''
    cep: string = ''
    bairro: string = ''
    cidade: string = ''

    constructor(produtor?: ProdutorFormValues) {
        if (produtor) {
            this.id = produtor.id
            this.nome = produtor.nome
            this.celular = produtor.celular
            this.telefone = produtor.telefone
            this.endereco = produtor.endereco
            this.tipoLogradouro = produtor.tipoLogradouro
            this.descLogradouro = produtor.descLogradouro
            this.cep = produtor.cep
            this.bairro = produtor.bairro
            this.cidade = produtor.cidade
        }
    }
}