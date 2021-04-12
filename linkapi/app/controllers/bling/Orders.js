const BlingService = require("../../services/Bling");

exports.patchDailyBlingReport = async function(req, res, next){
    const report = await BlingService.createDailyBlingReport();

    return res.status(200)
          .send({...report});
};

exports.getDailyBlingReport = async function(req, res, next){
    const date = req.query.date;
    const offset = req.query.offset;
    const order = req.query.order;

    const reports = await BlingService.getDailyBlingReport({ date, offset, order });

    return res.status(200)
                .send(
                    reports ? reports : 
                        {
                            message: "Nothing to report."
                        }
                    );
};
