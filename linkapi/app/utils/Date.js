const IS_RUNNING_CONTAINER = require("../constants/App");

const moment = require("moment");
require("moment/min/locales");

moment.locale("pt-BR");

const DateUtils = {
    getTodayBrazilianFormat(format){
        return format ? moment().format(format) : moment().format();
    },
    getYesterdayBrazilianFormat(format){
        return moment(this.getTodayBrazilianFormat()).subtract('days', IS_RUNNING_CONTAINER == "yes" ? 2 : 1).format(format); 
    }
};

module.exports = DateUtils;