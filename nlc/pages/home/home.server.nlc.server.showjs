var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.server.nlc.client.js";
                    var nmodules=[];
                    var pages=[];
                    
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home-server';
    
    

    
        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function() {
                
            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home-server',(req,res)=>{
                res.send(code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    var exports=new Object();
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    module.exports=exports;
                