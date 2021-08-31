var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.nlc.client.js";
                        var a03680bb0_3988_4b38_8d1d_e954d3b890f4_module;
                    
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

        nmodule.name='home-client';
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                        a03680bb0_3988_4b38_8d1d_e954d3b890f4_module=module;
                    })
                    var getterObj03680bb0_3988_4b38_8d1d_e954d3b890f4={
                        set stter(value) {
                            a03680bb0_3988_4b38_8d1d_e954d3b890f4_module.Set('syncProp',value);
                        }
                    }
                    getterObj03680bb0_3988_4b38_8d1d_e954d3b890f4.stter=5;
            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    

    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home-client',(req,res)=>{
                res.send(code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    var exports=new Object();
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    module.exports=exports;
                