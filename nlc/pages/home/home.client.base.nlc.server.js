var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.base.nlc.client.js";
<<<<<<< HEAD
                            var ad0a15c74_e5f3_4332_b824_57b153ea3911_module;
=======
                            var a6f4568ba_add2_49e6_a5a4_42ccfa2bc142_module;
>>>>>>> parent of 10d589c (add uninstall.bat and install.bat)
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
<<<<<<< HEAD
                            ad0a15c74_e5f3_4332_b824_57b153ea3911_module=module;
                        })
                        var getterObjd0a15c74_e5f3_4332_b824_57b153ea3911={
                            set stter(value) {
                                ad0a15c74_e5f3_4332_b824_57b153ea3911_module.Set('syncProp',value);
                            }
                        }
                        getterObjd0a15c74_e5f3_4332_b824_57b153ea3911.stter=0; 
=======
                            a6f4568ba_add2_49e6_a5a4_42ccfa2bc142_module=module;
                        })
                        var getterObj6f4568ba_add2_49e6_a5a4_42ccfa2bc142={
                            set stter(value) {
                                a6f4568ba_add2_49e6_a5a4_42ccfa2bc142_module.Set('syncProp',value);
                            }
                        }
                        getterObj6f4568ba_add2_49e6_a5a4_42ccfa2bc142.stter=0; 
>>>>>>> parent of 10d589c (add uninstall.bat and install.bat)
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
                