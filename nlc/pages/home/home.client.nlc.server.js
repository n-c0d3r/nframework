var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.nlc.client.js";
                            var ac7af3476_f2b4_417a_a342_0c9e79310091_module;
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
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            ac7af3476_f2b4_417a_a342_0c9e79310091_module=module;
                        })
                        var getterObjc7af3476_f2b4_417a_a342_0c9e79310091={
                            set stter(value) {
                                ac7af3476_f2b4_417a_a342_0c9e79310091_module.Set('syncProp',value);
                            }
                        }
                        getterObjc7af3476_f2b4_417a_a342_0c9e79310091.stter=0;
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
                