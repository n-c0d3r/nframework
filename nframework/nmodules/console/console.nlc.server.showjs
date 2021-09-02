var JSCLPath = "D:\\nframework_gr\\nframework/nmodules/console/console.nlc.client.js";module.exports=(manager)=>{
                var exports=new Object();
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

        nmodule.name='console';
    
    

    
        nmodule.AddMethod('log',(...args)=>{
            var f=
    
        function(...args) {
            console.log(...args);
        }
    
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    
        nmodule.AddMethod('log2',async (...args)=>{
                var f=async function(...args) {
            console.log(...args);
        }
    
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/console',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                