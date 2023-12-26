
class NModule {
    constructor() {
        this.properties             = new Object();
        this.syncProperties         = new Object();
        this.methods                = new Object();
        this.serverMethods          = new Object();
        this.serverMethodRouters    = new Object();
        this.clientMethods          = new Object();

        this.baseModules            = [];
        this.routers                = [];

        this.isImported             = false;
        this.size                   = 'both';
    }

    GetWithIsExist(name) {
        let result = null;
        let isExist = false;

        if (name in this.properties) {
            result = this.properties[name];
            isExist = true;
        }
        else if (name in this.methods) {
            result = this.methods[name];
            isExist = true;
        }
        else if (name in this.serverMethods) {
            result = this.serverMethods[name];
            isExist = true;
        }
        else if (name in this.clientMethods) {
            result = this.clientMethods[name];
            isExist = true;
        }
        else if (name in this.syncProperties) {
            result = this.syncProperties[name];
            isExist = true;
        }
        else {
            for (let i = 0; i < this.baseModules.length; i++) {
                let baseModule = this.GetModule(this.baseModules[i]);
                let fBM = baseModule.GetWithIsExist(name);
                if (fBM.isExist) {
                    result = fBM.data;
                    isExist = true;
                    break;
                }
            }
        }

        return {
            'data': result,
            'isExist': isExist
        };
    }


    Get(name) {
        let result = null;
        let r = false;

        if (name in this.properties) {
            result = this.properties[name];
            r = true;
        }
        else if (name in this.methods) {
            result = this.methods[name];
            r = true;
        }
        else if (name in this.serverMethods) {
            result = this.serverMethods[name];
            r = true;
        }
        else if (name in this.clientMethods) {
            result = this.clientMethods[name];
            r = true;
        }
        else if (name in this.syncProperties) {
            result = this.syncProperties[name];
            r = true;
        }
        else {
            for (let i = 0; i < this.baseModules.length; i++) {
                let baseModule = this.GetModule(this.baseModules[i]);
                let fBM = baseModule.GetWithIsExist(name);
                if (fBM.isExist) {
                    result = fBM.data;
                    r = true;
                    break;
                }
            }
        }
        if (!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
        return result;
    }

    Set(name, data) {
        let r = false;
        if (name in this.properties) {
            this.properties[name] = data;
            r = true;
        }
        else if (name in this.methods) {
            this.methods[name] = data;
            r = true;
        }
        else if (name in this.serverMethods) {
            this.serverMethods[name] = data;
            r = true;
        }
        else if (name in this.clientMethods) {
            this.clientMethods[name] = data;
            r = true;
        }
        else if (name in this.syncProperties) {
            this.syncProperties[name] = data;
            r = true;
        }
        else {
            for (let i = 0; i < this.baseModules.length; i++) {
                let baseModule = this.GetModule(this.baseModules[i]);
                let fBM = baseModule.GetWithIsExist(name);
                if (fBM.isExist) {
                    baseModule.Set(name, data);
                    r = true;
                    break;
                }
            }
        }
        if (!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
    }

    async AsyncGet(name) {

        return this.Get(name);
    }
    
    async AsyncSet(name, data) {

        this.Set(name, data);
    }

    Constructor(customizeFunc) {
        customizeFunc.call(this);
    }

    AddProperty(name) {
        this.properties[name] = null;
    }

    AddSyncProperty(name) {
        this.syncProperties[name] = null;
    }

    AddMethod(name, method) {
        this.methods[name] = method;
    }

    GetThisWithCallback(callback) {
        return callback(this);
    }

    SetupServerMethod(name) {
        let serverMethodRouter = new Object();

        serverMethodRouter.name = name;

        serverMethodRouter.nmoduleName = this.name;

        serverMethodRouter.path = `nframework/execute-server-method/${serverMethodRouter.nmoduleName}/${serverMethodRouter.name}`;

        let nmodule = this;

        serverMethodRouter.callback = (client, data) => {
            return nmodule.Get(name)(client, ...data);
        };

        let ioManager = this.manager.NFramework.ioRouterManager;

        ioManager.AddRouter(serverMethodRouter);
    }

    SetupClientMethod(name) {
        let ioManager = this.manager.NFramework.ioRouterManager;

        let moduleName = this.name;

        this.clientMethods[name] = (clientSocket, ...args) => {
            let data = args;
            let path = `nframework/execute-client-method/${moduleName}/${name}`;
            ioManager.Emit(clientSocket, path, data);
        };
    }

    AddServerMethod(name, method) {
        this.serverMethods[name] = method;
    }

    AddClientMethod(name, method) {
        this.clientMethods[name] = method;
    }

    Setup() {
        if (this.methods.setup)
            this.methods.setup.call(this);
    }

    Start() {
        if (this.methods.start)
            this.methods.start.call(this);
    }

    GetModule(name) {
        return this.manager.GetModule(name);
    }

    AfterImported() {
        this.isImported = true;

        this.RoutingRouters();
        this.SetupServerMethods();
        this.SetupClientMethods();
    }

    SetupClientMethods() {
        let keys = Object.keys(this.clientMethods);

        for (let key of keys)
            this.SetupClientMethod(key);
    }

    SetupServerMethods() {
        let keys = Object.keys(this.serverMethods);

        for (let key of keys)
            this.SetupServerMethod(key);
    }

    RoutingRouters() {
        for (let router of this.routers)
            this.NoSafe__Routing(router.path, router.callback);
    }

    async AsyncGetThisWithCallback(callback) {
        const callbackResult = await callback(this);
        return callbackResult;
    }

    NoSafe__Routing(path, callback) {
        let express_server = this.manager.NFramework.express_server;
        let module = this;
        
        express_server.get(path, (req, res) => callback.call(this, req, res));
    }

    Routing(path, callback) {
        if (!this.isImported) {
            this.routers.push({
                'path': path,
                'callback': callback
            });
        } else {
            this.NoSafe__Routing(path, callback);
        }
    }

}



module.exports = NModule;
