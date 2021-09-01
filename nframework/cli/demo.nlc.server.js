var JSCLPath = "D:\\nframework_gr\\nframework\\cli/demo.nlc.client.js";module.exports=(manager)=>{
                var exports=new Object();
                    var nmodules=[];
                    var pages=[];

                    
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\nframework\\cli\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home-client';
    
    

    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home-client',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                