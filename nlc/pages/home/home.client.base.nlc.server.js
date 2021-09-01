var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.base.nlc.client.js";
                            var af9e42396_c17a_4c8d_9db0_86fcc9b7d5ac_module;
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

        nmodule.name='home-client-base';
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            af9e42396_c17a_4c8d_9db0_86fcc9b7d5ac_module=module;
                        })
                        var getterObjf9e42396_c17a_4c8d_9db0_86fcc9b7d5ac={
                            set stter(value) {
                                af9e42396_c17a_4c8d_9db0_86fcc9b7d5ac_module.Set('syncProp',value);
                            }
                        }
                        getterObjf9e42396_c17a_4c8d_9db0_86fcc9b7d5ac.stter=0; 
            }   

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home-client-base',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                