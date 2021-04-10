const moment = require("moment");
require("moment/min/locales");

moment.locale("pt-BR");

const DateUtils = {
    formatBrazilianDateTime(date){
        return moment(date).format();
    },
    getBrazilianDateTime(format) {
        return moment().format(format);
    }
};

module.exports = DateUtils;