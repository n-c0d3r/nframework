var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.nlc.client.js";
                            var ad23a844b_cb20_4a49_8a22_b396322513a4_module;
                        module.exports=(manager)=>{
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

        nmodule.name='home-client';
    
    

    
    
        nmodule.baseModules = ['home-client-base'];
    
    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            ad23a844b_cb20_4a49_8a22_b396322513a4_module=module;
                        })
                        var getterObjd23a844b_cb20_4a49_8a22_b396322513a4={
                            set stter(value) {
                                ad23a844b_cb20_4a49_8a22_b396322513a4_module.Set('syncProp',value);
                            }
                        }
                        getterObjd23a844b_cb20_4a49_8a22_b396322513a4.stter=0;
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
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                