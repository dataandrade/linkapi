const AppConstants = require("../constants/App");

const fetch = require('node-fetch');
let convert = require('xml2js');

const BlingService = {
    async createBlingOrders(pipedriveDeals){
        // const _t = {
        //     pedido: {
        //         transporte: {
        //             volumes: [{
        //                 volume: "SEDEX - CONTRATO"
        //             }]
        //         },
        //         cliente: {
        //             nome: "Teste",
        //             tipoPessoa: "F"
        //         },
        //         itens: {
        //             item: [ {
        //                 descricao: "test",
        //                 qtde: 1,
        //                 vlr_unit: 1
        //             }]
        //         },
        //         parcelas: {
        //             parcela: [
        //                 {
        //                     vlr: 1
        //                 }
        //             ]
        //         }
        //     }
        // };

        const _p = {
            "pedido": {
                "cliente": {
                    "nome": "Organisys Software",
                    "tipoPessoa": "J",
                    "endereco": "Rua Visconde de São Gabriel",
                    "cpf_cnpj": "00000000000000",
                    "ie": "3067663000",
                    "numero": "392",
                    "complemento": "Sala 54",
                    "bairro": "Cidade Alta",
                    "cep": "95.700-000",
                    "cidade": "Bento Gonçalves",
                    "uf": "RS",
                    "fone": "5481153376",
                    "email": "teste@teste.com.br"
                },
                "transporte": {
                    "transportadora": "Transportadora XYZ",
                    "tipo_frete": "R",
                    "servico_correios": "SEDEX - CONTRATO",
                    "dados_etiqueta": {
                        "nome": "Endereço de entrega",
                        "endereco": "Rua Visconde de São Gabriel",
                        "numero": "392",
                        "complemento": "Sala 59",
                        "municipio": "Bento Gonçalves",
                        "uf": "RS",
                        "cep": "95.700-000",
                        "bairro": "Cidade Alta"
                    },
                    "volumes": {
                        "volume": [
                            {
                                "servico": "SEDEX - CONTRATO",
                                "codigoRastreamento": ""
                            },
                            {
                                "servico": "PAC - CONTRATO",
                                "codigoRastreamento": ""
                            }
                        ]
                    }
                },
                "itens": {
                    "item": [
                        {
                            "codigo": "001",
                            "descricao": "Caneta 001",
                            "un": "Pç",
                            "qtde": "10",
                            "vlr_unit": "1.68"
                        },
                        {
                            "codigo": "002",
                            "descricao": "Caderno 002",
                            "un": "Un",
                            "qtde": "3",
                            "vlr_unit": "3.75"
                        },
                        {
                            "codigo": "003",
                            "descricao": "Teclado 003",
                            "un": "Cx",
                            "qtde": "7",
                            "vlr_unit": "18.65"
                        }
                    ]
                },
                "parcelas": {
                    "parcela": [
                        {
                            "data": "01/09/2009",
                            "vlr": "100",
                            "obs": "Teste obs 1"
                        },
                        {
                            "data": "06/09/2009",
                            "vlr": "50",
                            "obs": ""
                        },
                        {
                            "data": "11/09/2009",
                            "vlr": "50",
                            "obs": "Teste obs 3"
                        }
                    ]
                },
                "vlr_frete": "15",
                "vlr_desconto": "10",
                "obs": "Testando o campo observações do pedido",
                "obs_internas": "Testando o campo observações internas do pedido"
            }
        };
       // const bodyConverted = convert.json2xml(pipedriveDeals);
        var builder = new convert.Builder();
        const bodyConverted = builder.buildObject(_p);


        const URL = `https://bling.com.br/Api/v2/pedido/json/&apikey=e4bbb1db79e034b79843f61adebd713aa43144ca9abf79bdcb3638356e2f65303f5f8d32&xml=${arrayXml}`;
        
        const params = {
            method: "POST"
        };

        return fetch(URL, params)
                .then(res => res.json())
                .then(tt => console.log(JSON.stringify(tt)))
                .then(blingOrdersCreated => blingOrdersCreated);
    
    }
};

module.exports = BlingService;