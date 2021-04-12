const DateUtils = require("./Date");

const PipedriveUtils = {
    BlingFormat(data){
        return data.map((deal) => {
            return {
                data: DateUtils.getYesterdayBrazilianFormat("DD/MM/YYYY"),
                cliente: {
                    nome: deal.person_name
                },                
                transporte: {
                    volumes: {
                        volume: [
                            {
                                servico: "SEDEX"
                            }
                        ]
                    }
                },
                itens: {
                    item: [
                        {
                            codigo: "New won deal",
                            descricao: deal.title,
                            qtde: 1,
                            vlr_unit: deal.value
                        }
                    ]
                },
                parcelas: {
                    parcela: [
                        {
                            data: DateUtils.getYesterdayBrazilianFormat("DD/MM/YYYY"),
                            vlr: deal.value,
                            obs: deal.status
                        }
                    ]
                }
            }
        });
    }
};

module.exports = PipedriveUtils;