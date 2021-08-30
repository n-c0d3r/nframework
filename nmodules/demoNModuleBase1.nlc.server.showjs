var JSCLPath = "D:\\nframework_gr/nmodules/demoNModuleBase1.nlc.client.js";
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demoClientModuleBase';
    
    

    
    
    nmodule.AddProperty('demoBaseProp');
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

        function() {
            this.Set('demoBaseProp',5);
        }

    
        
    f.call(nmodule,...args); 

}
    
    );
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/demoClientModuleBase',(req,res)=>{
                res.send(code);
            });
        }

        

            module.exports = nmodule;
        
        
                
                