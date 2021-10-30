const JSCLPath = "D:\\demonframework\\nframework/nmodules/dom/dom.nlc.client.js";

module.exports = (manager) => {
    const fs = require('fs');
    const clientVersion = JSCLPath;

    const NModule = () => {
        return require("D:\\demonframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
    }();

    var exports = new Object();
    var nmodules = [];
    var pages = [];

    exports.customTypeDatas = [];
    exports.customTypeDatas.Add = (key, value) => {
        exports.customTypeDatas.push({
            'key': key,
            'value': value
        });
    }

    var nmodule = new NModule();

    var This = nmodule;

    nmodule.side = 'both';
    nmodule.name = 'dom';
    nmodule.__TYPE = 'NMODULE';
    nmodule.RunExternalMethod = (callback) => callback.call(nmodule);

    nmodule.RunExternalMethod(function() {
        // Code
    });

    nmodule.client_js_code = fs.readFileSync(clientVersion);

    if (nmodule.side != 'server')
        nmodule.Routing('/nmodules/dom', (req, res) => res.send(nmodule.client_js_code));

    nmodules.push(nmodule);

    exports.nmodules = nmodules;
    exports.pages = pages;

    return exports;
}
