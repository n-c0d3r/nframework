var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.base.nlc.client.js";
                            var a5648f433_6a0f_48a6_a06e_ba11e0bc53e6_module;
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
                            a5648f433_6a0f_48a6_a06e_ba11e0bc53e6_module=module;
                        })
                        var getterObj5648f433_6a0f_48a6_a06e_ba11e0bc53e6={
                            set stter(value) {
                                a5648f433_6a0f_48a6_a06e_ba11e0bc53e6_module.Set('syncProp',value);
                            }
                        }
                        getterObj5648f433_6a0f_48a6_a06e_ba11e0bc53e6.stter=0; 
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
                