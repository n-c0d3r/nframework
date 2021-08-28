var NModuleManager = class{
    constructor(){
        this.modules=new Object();
    }


    ImportModule(module){
        var moduleName = module.name;
        this.modules[moduleName]=module;
        this.modules[moduleName].manager=this;
        this.modules[moduleName].AfterImported();
    }

    Setup(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            this.modules[keys[i]].Setup();
        }
    }

    Start(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            this.modules[keys[i]].Start();
        }
    }

    GetModule(name){
        return this.modules[name];
    }

}


window.NFramework.NModuleManager=NModuleManager;

window.NFramework.nmoduleManager=new NModuleManager();

window.NFramework.nmoduleManager.NFramework=window.NFramework;