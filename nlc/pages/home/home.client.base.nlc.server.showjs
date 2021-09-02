var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.base.nlc.client.js";
                            var aaaa5c4f4_4068_4475_a5af_23fa86d7579a_module;
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
    
    

    

        
        nmodule.AddMethod('setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            aaaa5c4f4_4068_4475_a5af_23fa86d7579a_module=module;
                        })
                        var getterObjaaa5c4f4_4068_4475_a5af_23fa86d7579a={
                            set stter(value) {
                                aaaa5c4f4_4068_4475_a5af_23fa86d7579a_module.Set('syncProp',value);
                            }
                        }
                        getterObjaaa5c4f4_4068_4475_a5af_23fa86d7579a.stter=0; 
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
                