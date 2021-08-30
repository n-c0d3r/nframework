var JSCLPath = "D:\\nframework_gr/nmodules/demoNModuleServer.nlc.client.js";
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demoClientModuleServer';
    
    

    nmodule.side='server';


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/demoClientModuleServer',(req,res)=>{
                res.send(code);
            });
        }

        

            module.exports = nmodule;
        
        
                
                