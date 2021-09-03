var JSCLPath = "D:\\nframework_gr/nlc/demo.nlc.client.js";module.exports=(manager)=>{
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

                    
                
                    exports.customTypeDatas.Add('demoGlobal',(()=>{
            var data=

    function() {
        console.log(Object.keys((manager.Get('home-client')).properties));
        console.log((manager.Get('home-client')) .GetThisWithCallback((module)=>{
                            return module.Get('base');
                        }));
        return 'Demo Global Function';
    }

;
            return data;
        })())
                
                
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='checkGlobalDemo';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',(...args)=>{
            var f=
    

        function(){

            
            
        }

    
        
    return f.call(this,...args); 

}
    
    );
    
    


        });
    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/checkGlobalDemo',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                