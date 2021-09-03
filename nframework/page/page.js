var fs=require('fs');

var Page=class{
    constructor(){
        
    }

    SetupGlobalObjectsRouter(){
        var manager=this.manager;

        for(var globalObjName of this.customTypeDatas){
            var info=manager.customTypeDataInfos[globalObjName];
            if(!info.isSetupCLRouter){
                
                var express_server=manager.NFramework.express_server;

                var url=`/global-objects/${globalObjName}`;

                var data=manager.jsCode[globalObjName];

                data=`
                    window.NFramework.nmoduleManager.customTypeDatas['${globalObjName}']=${data}
                `;
                
                express_server.get(url,(req,res)=>{

                    res.send(data);
                });
            }
        }
    }

    AfterSetup(){
        this.SetupGlobalObjectsRouter();
    }

}


module.exports=Page;