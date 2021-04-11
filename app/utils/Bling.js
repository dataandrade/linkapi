let convert = require('js2xmlparser');

const BlingUtils = {
    ObjectToXml(context, data){

        let xml = convert.parse(context, data, { declaration: { include: false } });
        
        xml = xml.replace("<pedido>", "");
        xml = xml.replace("</pedido>", "");
        xml = xml.replace(/>\s*/g, '>');
        xml = xml.replace(/\s*</g, '<');
        console.log(xml);
        xml = encodeURI(xml);

        

        return xml;
    }
};

module.exports = BlingUtils;