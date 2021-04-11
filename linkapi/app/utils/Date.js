const moment = require("moment");
require("moment/min/locales");

moment.locale("pt-BR");

const DateUtils = {
    getTodayBrazilianFormat(format){
        return format ? moment().format(format) : moment().format();
    },
    getYesterdayBrazilianFormat(format){
        return moment(this.getTodayBrazilianFormat()).subtract('days', 1).format(format); 
    }
};

module.exports = DateUtils;