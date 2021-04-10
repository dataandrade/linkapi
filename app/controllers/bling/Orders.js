const BlingService = require("../../services/Bling");

exports.patchDailyBlingReport = async function(req, res, next){
    // chamar servico principal deste report. Que eh tambem utilizado pela Cron.
    const _daily = await BlingService.createDailyBlingReport();

    return res.status(200)
          .send({..._daily});
};