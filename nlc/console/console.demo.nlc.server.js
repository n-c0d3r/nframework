var JSCLPath = "D:\\nframework_gr/nlc/console/console.demo.nlc.client.js";module.exports=(manager)=>{
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

        nmodule.name='console-demo';
    
    

    
        nmodule.AddMethod('setup',async (...args)=>{
                var f=async function(){

            var input = await (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('readLine');
                        })();
            
            (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('log');
                        })(input);

            (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('clear');
                        })();

        }

    
                var f2=f.bind(nmodule);
                return await f2(...args);
            }
    
        );
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/console-demo',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                