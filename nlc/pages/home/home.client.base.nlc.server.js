var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.client.base.nlc.client.js";
                            var a8dbc4212_6d3b_44ed_a85c_c53a69b2344c_module;
                        module.exports=(manager)=>{
                var exports=new Object();
                    var nmodules=[];
                    var pages=[];
                    exports.customTypeDatas=[];
                    exports.customTypeDatas.Add=function(key,value){
                        exports.customTypeDatas.push({
                            'key':key,
                            'value':value
                        });
                    }

                    
                
                    

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
                            a8dbc4212_6d3b_44ed_a85c_c53a69b2344c_module=module;
                        })
                        var getterObj8dbc4212_6d3b_44ed_a85c_c53a69b2344c={
                            set stter(value) {
                                a8dbc4212_6d3b_44ed_a85c_c53a69b2344c_module.Set('syncProp',value);
                            }
                        }
                        getterObj8dbc4212_6d3b_44ed_a85c_c53a69b2344c.stter=0; 
            }   

        
        
    return f.call(nmodule,...args); 

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
                