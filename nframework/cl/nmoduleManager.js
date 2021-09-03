var NModuleManager = class{
    constructor(){
        this.modules=new Object();
        this.customTypeDatas=new Object();
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

    Get(name){
        if(name in this.modules)
            return this.modules[name];
        if(name in this.customTypeDatas)
            return this.customTypeDatas[name];
    }

    AutoSetParentForModules(){
        var moduleNames=Object.keys(this.modules);
        for(var moduleName of moduleNames){
            this.AutoSetParent(moduleName);
        }
    }

    AutoSetParent(name){
        var nameParts=name.split('-');
        var newName=nameParts[nameParts.length-1];
        
        if(nameParts.length==1){
            return 0;
        }
        else{
            var parentName='';
            for(var i=0;i<nameParts.length-2;i++){
                parentName+=nameParts[i]+'-';
            }
            parentName+=nameParts[nameParts.length-2];

            var parentModule=this.modules[parentName];

            if(parentModule!=null){
                parentModule.AddProperty(newName);
                parentModule.Set(newName,this.modules[name]);
            }
        }


    }

    AfterConnected(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            this.modules[keys[i]].AfterConnected();
        }
    }

}


window.NFramework.NModuleManager=NModuleManager;

window.NFramework.nmoduleManager=new NModuleManager();

window.NFramework.nmoduleManager.NFramework=window.NFramework;