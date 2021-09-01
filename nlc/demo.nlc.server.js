var JSCLPath = "D:\\nframework_gr/nlc/demo.nlc.client.js";
                            var aafacb4bd_e7db_48cd_a486_dc567d108241_module;
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

        nmodule.name='demo';
    
     

        
    
    nmodule.AddProperty('demoProp');
    
    

        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function() {
                
                manager.GetModule('demo').GetThisWithCallback((module)=>{
                            aafacb4bd_e7db_48cd_a486_dc567d108241_module=module;
                        })
                        var getterObjafacb4bd_e7db_48cd_a486_dc567d108241={
                            set stter(value) {
                                aafacb4bd_e7db_48cd_a486_dc567d108241_module.Set('demoProp',value);
                            }
                        }
                        getterObjafacb4bd_e7db_48cd_a486_dc567d108241.stter=5;
                
                manager.GetModule('demo').GetThisWithCallback((module)=>{
                            return module.Get('Log');
                        })(manager.GetModule('demo').GetThisWithCallback((module)=>{
                            return module.Get('demoProp');
                        }));

            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

        
        nmodule.AddMethod('Log',(...args)=>{
            var f=
    

            function(content) {
                
                console.log(content);

            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/demo',(req,res)=>{
                res.send(code);
            });
        }

        

            nmodules.push(nmodule);
        
        


                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                