var NModule = class{

    constructor(){

        this.properties=new Object();

        this.methods=new Object();

        this.serverMethods=new Object();

        this.clientMethods=new Object();

        this.baseModules=[];

        this.routers=[];

        this.isImported=false;
    }
    
    GetWithIsExist(name){
        var result=null;
        var isExist=false;
        if(name in this.properties){
            result=this.properties[name];
            isExist=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            isExist=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            isExist=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            isExist=true;
        }
        else
        for(var i=0;i<this.baseModules.length;i++){
            var baseModule=this.GetModule(this.baseModules[i]);
            var fBM=baseModule.GetWithIsExist(name);
            if(fBM.isExist){
                result=fBM.data;
                isExist=true;
                break;
            }
        }
        return {'data':result,'isExist':isExist};
    }


    Get(name){
        var result=null;
        var r=false;
        if(name in this.properties){
            result=this.properties[name];
            r=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            r=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            r=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    result=fBM.data;
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
        return result;
    }

    Set(name,data){
        var r=false;
        if(name in this.properties){
            this.properties[name]=data;
            r=true;
        }
        else
        if(name in this.methods){
            this.methods[name]=data;
            r=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            r=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    baseModule.Set(name,data);
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
    }

    Constructor(customizeFunc){
        customizeFunc.call(this);
    }

    AddProperty(name){
        this.properties[name]=null;
    }

    AddMethod(name,method){
        this.methods[name]=method;
    }

    AddServerMethod(name,method){
        this.serverMethods[name]=method;
    }

    AddClientMethod(name,method){
        this.clientMethods[name]=method;
    }

    Setup(){
        if(this.methods.Setup!=null){
            this.methods.Setup.call(this);
        }
    }

    Start(){
        if(this.methods.Start!=null){
            this.methods.Start.call(this);
        }
    }
    
    GetModule(name){
        return this.manager.GetModule(name);
    }

    SetupServerMethod(name){
        this.methods[name]=(...args)=>{

            var path=`nframework/execute-server-method/${this.name}/${name}`;

            this.manager.NFramework.socket.emit(path,args);
        }      

    }

    SetupServerMethods(){
        var keys=Object.keys(this.serverMethods);

        for(var key of keys){
            this.SetupServerMethod(key);
        }

    }

    AfterImported(){
        this.isImported=true;
        
        this.SetupServerMethods();
    }
}

window.NFramework.NModule=NModule;