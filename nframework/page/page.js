const fs = require('fs');

class Page {
    constructor() {}

    SetupGlobalObjectsRouter() {
        let manager = this.manager;

        for (let globalObjName of this.customTypeDatas) {
            let info = manager.customTypeDataInfos[globalObjName];

            if(!info.isSetupCLRouter) {
                let express_server = manager.NFramework.express_server;

                let url = `/global-objects/${globalObjName}`;

                let data = manager.jsCode[globalObjName];

                data = `
                    window.NFramework.nmoduleManager.customTypeDatas['${globalObjName}']=${data}
                `;

                let compiler = manager.NFramework.ncompiler;

                let compiledData = compiler.CompileNModuleFastGetterAndSetter(data);

                compiledData = compiledData.code;
                compiledData = compiler.CompileFastGet(compiledData);

                express_server.get(url, (req, res) => res.send(compiledData));
            }
        }
    }

    AfterSetup() {
        this.SetupGlobalObjectsRouter();
    }

}

module.exports = Page;
